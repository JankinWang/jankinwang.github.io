# Xdebug+vscode 远程调试

## 环境

-   ##### php 7.2.26

-   ##### Xdebug 2.9.8

-   ##### centos 7.8 + 宝塔面板

#### 其他工具

vscode, Xshell

## 开始

### Xdebug 安装、配置

>   首先要确保远程端的Xdebug已启动，并可以正常使用。

#### 安装

>   Linux 与 windows Xdeug安装方式不同，这里只关注 liunx 下的安装方式

**通过 pecl 安装**

```
pecl install xdebug 

// 如果安装了多个版本的php,
// 应该去使用想安装xdeubg的PHP版本安装目录下的 /bin/pecl
// 如： /www/server/php/72/bin/pecl
```



**通过源码自己编译安装**

-   下载xdebug源码
    wget [http://www.xdebug.org/files/xdebug-2.2.3.tgz](https://link.jianshu.com/?t=http://www.xdebug.org/files/xdebug-2.2.3.tgz)

    Github: https://github.com/xdebug/xdebug

-   编译

```
tar xzf xdebug-2.2.3.tgz // 解压

cd xdebug-2.2.3

/usr/local/php/bin/phpize  //我用的是这个,不知道 用 /usr/bin/phpize 可不可以

// 配置 php-config 路径 同样在php的 bin 目录下
./configure --with-php-config=/usr/local/php/bin/php-config

make // 执行完生成的文件夹在 ./modules/xdebug.so 

make test
// 这里可能会遇到一个问题需要在 php.ini 文件中取消禁用 proc_open 函数

make install
```

>   参考：
>
>   [编译安装php调试工具xdebug](https://www.jianshu.com/p/c469b8955cc5)
>
>   [PHP怎么安装扩展？](https://www.php.cn/php-weizijiaocheng-196594.html)
>
>   https://segmentfault.com/a/1190000019775071
>
>   https://my.oschina.net/bubifengyun/blog/753752



#### 配置

在 php.ini 中添加一下内容

```
[Xdebug]
zend_extension= "/www/server/php/72/lib/php/extensions/no-debug-non-zts-20170718/xdebug.so"

xdebug.remote_enable=1
xdebug.remote_handler=dbgp
xdebug.remote_host=localhost
xdebug.remote_port=9000
xdebug.remote_autostart=1

// 可酌情添加
#xdebug.idekey=VSCODE
#xdebug.profiler_enable=1
#xdebug.default_enable=1

```



### 配置 VsCode

-   安装 php debug 插件

-   添加配置 

    注：在插件自动生成的配置中 添加 pathMappings， 修改后台的配置如下

    ```
    {
        // 使用 IntelliSense 了解相关属性。 
        // 悬停以查看现有属性的描述。
        // 欲了解更多信息，请访问: https://go.microsoft.com/fwlink/?linkid=830387
        "version": "0.2.0",
        "configurations": [
            {
                "name": "Listen for XDebug",
                "type": "php",
                "request": "launch",
                "port": 9006, // 没有被占用的端口
                
                // 远程目录->本地目录
                "pathMappings": {
                    "/www/wwwroot/xdebug.1949cn.top": "${workspaceRoot}",
                }
            },
            {
                "name": "Launch currently open script",
                "type": "php",
                "request": "launch",
                "program": "${file}",
                "cwd": "${fileDirname}",
                "port": 9000
            }
        ]
    }
    ```



### 建立 ssh 隧道

-   确保能通过 ssh 连上服务器

-   确保 xdebug 配置的端口已放行。阿里云、腾讯云需要将端口添加到安全组

#### Xshell 新建会话

我们新建一个会话，填好名称、主机信息。注意：勾选连接异常关闭时自动重新连接，间隔可自己设置，这里是60秒

![image-20201116171530067](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20201116171530067.png)

#### 不分配终端

为安全起见，服务器上用于建立隧道的用户，可以被被设置为不允许通过Shell登录的。如果设置了，那我们需要设置Xshell在进行SHH连接时不分配终端。

![image-20201116171700647](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20201116171700647.png)

#### 添加一个远程（R）隧道

我们添加一个远程（R）隧道，则将云服务器的9090端口，映射到localhost:9090端口，从而达到将云服务器9090端口的数据转发到本地xdebug对应的9090端口的目的。

![image-20201116172325070](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20201116172325070.png)

#### 输入日志

为了能了解隧道的运行情况，我们设置Xshell输出隧道相关的日志。

![image-20201116172655894](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20201116172655894.png)

>   建立ssh隧道参考
>
>   https://blog.csdn.net/weixin_41245990/article/details/107325629
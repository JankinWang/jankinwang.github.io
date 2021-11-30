# GitHub 访问

##  修改 hosts 文件 

### 手动配置

1.   获取以下GitHub域名ip地址

     ip查询工具: https://www.ipaddress.com   https://myssl.com/dns_check.html

     域名：

     ​	github.com,

     ​	assets-cdn.github.com

     ​	github.global.ssl.fastly.net

2.   修改 hosts 文件

     ```shell
     140.82.112.3 github.com
     185.199.108.153 assets-cdn.github.com
     185.199.110.153 godbasin.github.io
     ```

     

3.   运行 ==ipconfig/flushdns== 手动刷新系统DNS缓存



### SwitchHosts

[SwitchHosts](https://swh.app/zh/) 是管理 hosts 文件的软件，可以更灵活的的管理hosts文件。

另外还可以订阅远程别人分享的 hosts 设置，比如：https://github.com/521xueweihan/GitHub520

## GitHub 镜像

-   https://hub.fastgit.org/

    直接将GitHub的域名后的部分拼接到这个域名后即可




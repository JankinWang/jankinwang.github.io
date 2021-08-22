## 运行环境

#### VirtualBox + centos 7 配置好网卡，使其可以通过ip访问

#### Docker v20.10.3

#### nginx v1.19.6

#### php 7.4.8-fpm



## 安装php

#### 拉取镜像

```shell
$ docker pull php:7.4.8-fpm
```

#### 启动php容器

-   首先在宿主机上创建号web应用目录 如：www/webroot, 用来存放项目文件

-   运行PHP容器

    ```shell
    $ docker run --name php7.4-fpm -v /www/webroot:/www  -d php:7.4.8-fpm
    # -v /www/webroot:/www 将宿主机的web应用目录映射到PHP容器的 /www
    ```

    

#### 启动Nginx容器

-   创建 ~/nginx/conf/conf.d 目录（实际目录可自选）

    ```shell
    mkdir ~/nginx/conf/conf.d
    # 可以在这里添加以 .conf 为后缀的文件，来扩展和覆盖Nginx的配置 比如：配置虚拟主机
    
    # 在这个目录下添加 test-php.conf 且内容如下：
    server {
        listen       80;
        server_name  localhost;
    
        location / {
            root   /usr/share/nginx/html; # Nginx 容器的映射目录
            index  index.html index.htm index.php;
        }
    
        error_page   500 502 503 504  /50x.html;
        location = /50x.html {
            root   /usr/share/nginx/html;
        }
    
        location ~ \.php$ {
        	root /www/ # php 容器的文件目录
            fastcgi_pass   php:9000; # 告诉Nginx php-fpm 监听的端口
            fastcgi_index  index.php;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name; # 实际可能不是这样
            include        fastcgi_params;
        }
    }
    ```

-   拉取nginx 镜像并启动容器

    ```shell
    $ docker run --name runoob-php-nginx -p 8083:80 -d \
        -v ~/nginx/www:/usr/share/nginx/html:ro \
        -v ~/nginx/conf/conf.d:/etc/nginx/conf.d:ro \
        --link myphp-fpm:php \
        nginx
    ```

    >   -   **-p 8080:80**: 端口映射，把 **nginx** 中的 80 映射到本地的 8083 端口。
    >   -   **~/www/webroot**: 是本地 html 文件的存储目录，/usr/share/nginx/html 是容器内 html 文件的存储目录。
    >   -   **~/nginx/conf/conf.d**: 是本地 nginx 配置文件的存储目录，/etc/nginx/conf.d 是容器内 nginx 配置文件的存储目录。
    >   -   **--link myphp-fpm:php**: 把 **myphp-fpm** 的网络并入 ***nginx\***，并通过修改 **nginx** 的 /etc/hosts，把域名 **php** 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。

然后就可以 访问 /www/webroot 目录下的php文件了，如： 主机ip:8080/index.php



#### 用thinkphp 6 框架测试一下环境是否能用

**配置虚拟主机**比上边要复杂些

```shell
# 宿主机的web目录为：/www/webroot/
# nginx容器将 /www/webroot/ 映射到 /usr/share/nginx/html/
# PHP容器将 /www/webroot/ 映射到 /www/

# 应此tp6框架对应的存放目录有三个：
# 宿主机/www/webroot/tp6/
# nginx容器 /usr/share/nginx/html/tp6/
# PHP容器 /www/tp6/

# 这里的三个目录是一样的，只是入口不同

server {
        listen        80;
        server_name  www.tp6docker.com;
       
        location / {
            root   /usr/share/nginx/html/tp6/public; # nginx容器下的入口文件
            index index.php index.html error/index.html;
            error_page 400 /error/400.html;
            error_page 403 /error/403.html;
            error_page 404 /error/404.html;
            error_page 500 /error/500.html;
            error_page 501 /error/501.html;
            error_page 502 /error/502.html;
            error_page 503 /error/503.html;
            error_page 504 /error/504.html;
            error_page 505 /error/505.html;
            error_page 506 /error/506.html;
            error_page 507 /error/507.html;
            error_page 509 /error/509.html;
            error_page 510 /error/510.html;
            include /usr/share/nginx/html/tp6/public/nginx.htaccess; # 伪静态文件
            autoindex  off;
        }
        location ~ \.php(.*)$ {
            root /www/tp6/public; # PHP容器下的入口文件
            fastcgi_pass   php:9000;
            fastcgi_index  index.php;
            fastcgi_split_path_info  ^((?U).+\.php)(/?.+)$;
            fastcgi_param  SCRIPT_FILENAME  $document_root$fastcgi_script_name;
            fastcgi_param  PATH_INFO  $fastcgi_path_info;
            fastcgi_param  PATH_TRANSLATED  $document_root$fastcgi_path_info;
            include        fastcgi_params;
        }
}
```



#### 现在访问 www.tp6docker.com 



#### 安装php扩展

```shell
# 安装 pdo-mysql 扩展
docker exec -ti php7.4-fpm /bin/bash # 首先进入容器
docker-php-ext-install pdo pdo_mysql # 安装 pdo_mysql 扩展

# 现在就可以链接数据库了
# 如果数据库没有用docker安装，这时数据库的 hostname 不能使 127.0.0.1，可以用服务器的公网ip
```


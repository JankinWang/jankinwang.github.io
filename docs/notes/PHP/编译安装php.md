# 编译安装php

1.  获取并解压 PHP 源代码: 

2.  配置并构建 PHP

    1.  切换到解压号的PHP文件目录

        ```sh
        cd ../php-x.x.x
        ```

        

    2.  配置 configure

        [更多配置](https://www.php.net/manual/zh/configure.about.php)

        ```sh
        ./configure
        --prefix=/usr/local/php ## 指定 php 安装目录 
        --with-config-file-path=/usr/local/php/etc ## 指定php.ini位置
        --enable-fpm ## 开启fpm
        --with-mysql ## 开启 mysql
        ```

        

    3.  编译安装

    ```shell
    make
    sudo make install
    
    ```

    
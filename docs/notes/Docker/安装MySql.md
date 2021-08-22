# CentOS 下使用Docker 安装mysql,并实现远程访问

### 安装过程参考 菜鸟教程

>   https://www.runoob.com/docker/docker-install-mysql.html



### 配置远程访问

```sh
 docker run -itd --name mysql-test -p 3306:3306 -v /my/custom:/etc/mysql/conf.d -e MYSQL_ROOT_PASSWORD=123456 mysql
```

>    --name 指定容器名称
>    -p          映射端口号, 宿主机:容器
>    -v           映射文件或目录，宿主机:容器。
>    	          这样容器中的mysql就可以访问宿主机中的`my.cnf`配置文件，同时方便我们修改配置
>    	          这里/my/custom是一个目录，存放着以.cnf 为后缀的文件，详细情况 [查看这里](https://hub.daocloud.io/repos/fa51c1d6-9dc2-49d9-91ac-4bbfc24a1bda)



1.  将Docker的 3306 端口映射到宿主机的 3306端口

2.  设置my.cnf 中的 

    ```shell
    bind-address = 0.0.0.0 # 有可能默认为：127.0.0.1,如果是这样的话则mysql服务只能在本机访问
    ```

3.  修改mysql 用户权限使其可以被远程访问

    ```mysql
    mysql -u root -p # 首先用 root 用户登录
    
    ALTER USER 'root'@'%' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则 
    ALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 
    
    grant all privileges on . to ‘root‘@’%’ ; # 开启 root@% 用户的所有权限
    
    flush privileges; #刷新权限
    ```

    
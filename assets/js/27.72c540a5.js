(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{406:function(t,n,s){"use strict";s.r(n);var a=s(45),r=Object(a.a)({},(function(){var t=this,n=t.$createElement,s=t._self._c||n;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"安装nginx-php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装nginx-php"}},[t._v("#")]),t._v(" 安装Nginx+php")]),t._v(" "),s("h2",{attrs:{id:"运行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行环境"}},[t._v("#")]),t._v(" 运行环境")]),t._v(" "),s("h4",{attrs:{id:"virtualbox-centos-7-配置好网卡-使其可以通过ip访问"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#virtualbox-centos-7-配置好网卡-使其可以通过ip访问"}},[t._v("#")]),t._v(" VirtualBox + centos 7 配置好网卡，使其可以通过ip访问")]),t._v(" "),s("h4",{attrs:{id:"docker-v20-10-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#docker-v20-10-3"}},[t._v("#")]),t._v(" Docker v20.10.3")]),t._v(" "),s("h4",{attrs:{id:"nginx-v1-19-6"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#nginx-v1-19-6"}},[t._v("#")]),t._v(" nginx v1.19.6")]),t._v(" "),s("h4",{attrs:{id:"php-7-4-8-fpm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#php-7-4-8-fpm"}},[t._v("#")]),t._v(" php 7.4.8-fpm")]),t._v(" "),s("h2",{attrs:{id:"安装php"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装php"}},[t._v("#")]),t._v(" 安装php")]),t._v(" "),s("h4",{attrs:{id:"拉取镜像"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#拉取镜像"}},[t._v("#")]),t._v(" 拉取镜像")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ docker pull php:7.4.8-fpm\n")])])]),s("h4",{attrs:{id:"启动php容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动php容器"}},[t._v("#")]),t._v(" 启动php容器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("首先在宿主机上创建号web应用目录 如：www/webroot, 用来存放项目文件")])]),t._v(" "),s("li",[s("p",[t._v("运行PHP容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ docker run --name php7.4-fpm -v /www/webroot:/www  -d php:7.4.8-fpm\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# -v /www/webroot:/www 将宿主机的web应用目录映射到PHP容器的 /www")]),t._v("\n")])])])])]),t._v(" "),s("h4",{attrs:{id:"启动nginx容器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动nginx容器"}},[t._v("#")]),t._v(" 启动Nginx容器")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("创建 ~/nginx/conf/conf.d 目录（实际目录可自选）")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("mkdir")]),t._v(" ~/nginx/conf/conf.d\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 可以在这里添加以 .conf 为后缀的文件，来扩展和覆盖Nginx的配置 比如：配置虚拟主机")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在这个目录下添加 test-php.conf 且内容如下：")]),t._v("\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    listen       "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    server_name  localhost"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Nginx 容器的映射目录")]),t._v("\n        index  index.html index.htm index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    error_page   "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v("  /50x.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    location "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" /50x.html "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        root   /usr/share/nginx/html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    location ~ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    \troot /www/ "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# php 容器的文件目录")]),t._v("\n        fastcgi_pass   php:9000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 告诉Nginx php-fpm 监听的端口")]),t._v("\n        fastcgi_index  index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        fastcgi_param  SCRIPT_FILENAME  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 实际可能不是这样")]),t._v("\n        include        fastcgi_params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])]),t._v(" "),s("li",[s("p",[t._v("拉取nginx 镜像并启动容器")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("$ docker run --name runoob-php-nginx -p "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("8083")]),t._v(":80 -d "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/nginx/www:/usr/share/nginx/html:ro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    -v ~/nginx/conf/conf.d:/etc/nginx/conf.d:ro "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    --link myphp-fpm:php "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n    nginx\n")])])]),s("blockquote",[s("ul",[s("li",[s("strong",[t._v("-p 8080:80")]),t._v(": 端口映射，把 "),s("strong",[t._v("nginx")]),t._v(" 中的 80 映射到本地的 8083 端口。")]),t._v(" "),s("li",[s("strong",[t._v("~/www/webroot")]),t._v(": 是本地 html 文件的存储目录，/usr/share/nginx/html 是容器内 html 文件的存储目录。")]),t._v(" "),s("li",[s("strong",[t._v("~/nginx/conf/conf.d")]),t._v(": 是本地 nginx 配置文件的存储目录，/etc/nginx/conf.d 是容器内 nginx 配置文件的存储目录。")]),t._v(" "),s("li",[s("strong",[t._v("--link myphp-fpm:php")]),t._v(": 把 "),s("strong",[t._v("myphp-fpm")]),t._v(" 的网络并入 *"),s("strong",[t._v("nginx*")]),t._v("，并通过修改 "),s("strong",[t._v("nginx")]),t._v(" 的 /etc/hosts，把域名 "),s("strong",[t._v("php")]),t._v(" 映射成 127.0.0.1，让 nginx 通过 php:9000 访问 php-fpm。")])])])])]),t._v(" "),s("p",[t._v("然后就可以 访问 /www/webroot 目录下的php文件了，如： 主机ip:8080/index.php")]),t._v(" "),s("h4",{attrs:{id:"用thinkphp-6-框架测试一下环境是否能用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用thinkphp-6-框架测试一下环境是否能用"}},[t._v("#")]),t._v(" 用thinkphp 6 框架测试一下环境是否能用")]),t._v(" "),s("p",[s("strong",[t._v("配置虚拟主机")]),t._v("比上边要复杂些")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 宿主机的web目录为：/www/webroot/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx容器将 /www/webroot/ 映射到 /usr/share/nginx/html/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PHP容器将 /www/webroot/ 映射到 /www/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 应此tp6框架对应的存放目录有三个：")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 宿主机/www/webroot/tp6/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx容器 /usr/share/nginx/html/tp6/")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PHP容器 /www/tp6/")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 这里的三个目录是一样的，只是入口不同")]),t._v("\n\nserver "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        listen        "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("80")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        server_name  www.tp6docker.com"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n       \n        location / "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root   /usr/share/nginx/html/tp6/public"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# nginx容器下的入口文件")]),t._v("\n            index index.php index.html error/index.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("400")]),t._v(" /error/400.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("403")]),t._v(" /error/403.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("404")]),t._v(" /error/404.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("500")]),t._v(" /error/500.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("501")]),t._v(" /error/501.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("502")]),t._v(" /error/502.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("503")]),t._v(" /error/503.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("504")]),t._v(" /error/504.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("505")]),t._v(" /error/505.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("506")]),t._v(" /error/506.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("507")]),t._v(" /error/507.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("509")]),t._v(" /error/509.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            error_page "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("510")]),t._v(" /error/510.html"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            include /usr/share/nginx/html/tp6/public/nginx.htaccess"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 伪静态文件")]),t._v("\n            autoindex  off"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        location ~ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v(".*"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$ "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            root /www/tp6/public"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# PHP容器下的入口文件")]),t._v("\n            fastcgi_pass   php:9000"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_index  index.php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_split_path_info  ^"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("?U"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v(".php"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("/?.+"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("$"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_param  SCRIPT_FILENAME  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_script_name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_param  PATH_INFO  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            fastcgi_param  PATH_TRANSLATED  "),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$document_root")]),s("span",{pre:!0,attrs:{class:"token variable"}},[t._v("$fastcgi_path_info")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n            include        fastcgi_params"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h4",{attrs:{id:"现在访问-www-tp6docker-com"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#现在访问-www-tp6docker-com"}},[t._v("#")]),t._v(" 现在访问 www.tp6docker.com")]),t._v(" "),s("h4",{attrs:{id:"安装php扩展"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装php扩展"}},[t._v("#")]),t._v(" 安装php扩展")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 pdo-mysql 扩展")]),t._v("\ndocker "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("exec")]),t._v(" -ti php7.4-fpm /bin/bash "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 首先进入容器")]),t._v("\ndocker-php-ext-install pdo pdo_mysql "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 安装 pdo_mysql 扩展")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 现在就可以链接数据库了")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 如果数据库没有用docker安装，这时数据库的 hostname 不能使 127.0.0.1，可以用服务器的公网ip")]),t._v("\n")])])])])}),[],!1,null,null,null);n.default=r.exports}}]);
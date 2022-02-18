(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{401:function(s,t,a){"use strict";a.r(t);var e=a(45),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" 安装MySQL")]),s._v(" "),a("blockquote",[a("p",[a("a",{attrs:{href:"https://www.runoob.com/docker/docker-install-mysql.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("参考"),a("OutboundLink")],1)]),s._v(" "),a("p",[s._v("CentOS 下使用Docker 安装mysql,并实现远程访问")])]),s._v(" "),a("h3",{attrs:{id:"配置远程访问"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#配置远程访问"}},[s._v("#")]),s._v(" 配置远程访问")]),s._v(" "),a("div",{staticClass:"language-sh extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sh"}},[a("code",[s._v(" docker run -itd --name mysql-test -p "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("3306")]),s._v(":3306 -v /my/custom:/etc/mysql/conf.d -e "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("MYSQL_ROOT_PASSWORD")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("123456")]),s._v(" mysql\n")])])]),a("blockquote",[a("p",[s._v("--name 指定容器名称\n-p          映射端口号, 宿主机:容器\n-v           映射文件或目录，宿主机:容器。\n这样容器中的mysql就可以访问宿主机中的"),a("code",[s._v("my.cnf")]),s._v("配置文件，同时方便我们修改配置\n这里/my/custom是一个目录，存放着以.cnf 为后缀的文件，详细情况 "),a("a",{attrs:{href:"https://hub.daocloud.io/repos/fa51c1d6-9dc2-49d9-91ac-4bbfc24a1bda",target:"_blank",rel:"noopener noreferrer"}},[s._v("查看这里"),a("OutboundLink")],1)])]),s._v(" "),a("ol",[a("li",[a("p",[s._v("将Docker的 3306 端口映射到宿主机的 3306端口")])]),s._v(" "),a("li",[a("p",[s._v("设置my.cnf 中的")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("bind-address "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.0")]),s._v(".0.0 "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 有可能默认为：127.0.0.1,如果是这样的话则mysql服务只能在本机访问")]),s._v("\n")])])])]),s._v(" "),a("li",[a("p",[s._v("修改mysql 用户权限使其可以被远程访问")]),s._v(" "),a("div",{staticClass:"language-mysql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("mysql -u root -p # 首先用 root 用户登录\n\nALTER USER 'root'@'%' IDENTIFIED BY 'password' PASSWORD EXPIRE NEVER; #修改加密规则 \nALTER USER 'root'@'%' IDENTIFIED WITH mysql_native_password BY 'password'; #更新一下用户的密码 \n\ngrant all privileges on . to ‘root‘@’%’ ; # 开启 root@% 用户的所有权限\n\nflush privileges; #刷新权限\n")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);
## 总计PHP的几种运行方式

### Cgi

>   即通用网关接口协议。 比较原始的一种运行模式，大多已不再使用

-   工作模式：fork-and-execute

-   有http请求时，创建 CGI 进程；处理请求；处理完后结束进程
-   性能低下。请求数量多时会大量挤占系统的资源如内 存，CPU时间
-   每次创建新的进程都需要加载完整的PHP解释器，加载解析php.ini配置文件，动态扩展库，初始化数据结构等



### FastCGI

>   fast-cgi 是cgi的升级版本, 也是一种协议
>
>   PHP使用PHP-FPM(FastCGI Process Manager)，全称PHP FastCGI进程管理器进行管理。

-   常驻内存
-   一般会有一个主进程和多个子进程提供服务
-   主进程只负责管理子进程，不处理http请求
-   子进程负责处理http请求，处理完成后挂起等待下一个请求
-   不用每次请求重新加载php



### APACHE2HANDLER

-   PHP作为Apache模块，并随Apache服务器一起启动
-   启动后，预先生成多个进程副本驻留内存等待请求。
-   性能也比CGI模式要好



### CLI

-   cli是php的命令行运行模式
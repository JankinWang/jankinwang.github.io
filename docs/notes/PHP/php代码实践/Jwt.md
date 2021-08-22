## JWT 原理描述

三个组成部分 header 、payload、signature 每个部分都是JSON 格式的数据, 

然后将每个部分的数据加密为base64字符串并用 `.`拼接在一起

>   参考：
>
>   https://www.cnblogs.com/guanxiying/p/13303206.html
>
>   https://www.liqingbo.cn/blog-1616.html


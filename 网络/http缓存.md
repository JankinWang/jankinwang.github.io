# Http 缓存

|          | 强制缓存                               | 协商缓存                                               |
| -------- | -------------------------------------- | ------------------------------------------------------ |
| 缓存位置 | 本地浏览器                             | 本地浏览器                                             |
| 谁来决定 | Pragma<br />Cache-Control<br />Expires | ETag/If-Not-Match<br />Last-Modified/If-Modified-Since |



### 强制缓存

在缓存数据未失效的情况下，直接使用浏览器缓存，不会再向服务器发送任何请求。缓存生效时 http 状态码为 200。

![img](https://raw.githubusercontent.com/JankinWang/PicGo/main/4845448-217723260f75ed90)

### 协商缓存

第一次请求后，依然会向服务器发送请求进行协商。如果资源有更新，返回新资源和200状态码；若资源未修改或更新，则返回 304 状态码告诉浏览器使用缓存的数据。

(注： 强制缓存没过期时会直接使用缓存，不会再向浏览器发送请求。)

![img](https://raw.githubusercontent.com/JankinWang/PicGo/main/4845448-a22cef109d00aa79)
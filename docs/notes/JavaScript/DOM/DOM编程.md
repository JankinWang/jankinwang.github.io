# 文档对象模型（DOM, Document Object Model）



## DOM节点类型

-   ### Node

    是基准节点类型，是文档一个部分的抽象表示，所有其他类型都继承Node。

-   ### Document

    整个文档，对应树形结构的根节点。document对象是Document的实例，拥有查询和获取节点的很多方法。

-   ### Element

    文档中所有HTML或XML元素，可以用来操作它们的内容和属性。

-   ### 其他

    文本内容、注释、文档类型、CDATA区块和文档片段。



## 动态加载脚本

创建节点

```js
let script = document.createElement("script");
script.src = 'foo.js';
document.body.appendChild(script)
```



嵌入源码

```js
var script = document.createElement("script");
var codeString = "function sayHi() { alert('hi') }"

try {
    script.appendChild(document.createTextNode(codeString));
} catch(ex) {
    // 兼容 ie
    script.text = codeString
}

document.body.appendChild(script)
```

>   通过innerHTML属性创建的<script>元素永远不会执行。



## 动态加载样式

创建节点

```js
let link = document.createElement("link");

link.rel = 'stylesheet';
link.type = 'text/css';
link.href = 'styles.css'

document.head.appendChild(link)
   // 或
let head = document.getElementByTagName('head')[0];
head.appendChild(link)
```



嵌入源码

```js
let style = document.createElement('style');
style.type = 'text/css';

let cssString = "body {background-color: red;}"

try {
    style.appendChild(document.createTextNote(cssString));
} catch(ex) {
    // 兼容 ie
    // cssText 不能赋值为空字符串，也不能重用同一个<style>
    // 否则会导致ie浏览器崩溃
    style.styleSheet.cssText = cssSrting;
}

document.head.appendChild(style)
```



## NodeList

>   NodeList、NamedNodeMap、HTMLCollection，他们都是“实时的”
>
>   NodeList 基于DOM文档的实时查询， 会有性能问题。
>
>   循环和迭代是应该注意NodeList的变化，避免造成死循环。


# 语法

```javascript
let expression = /pattern/flags;
或
var re = new RegExp("pattern", "flags");

// e.g.
let stringTest = /[tc]at/g;
或
let stringTest = new RegExp("[tc]at", g);

```

# flags

| **模式** | 描述 |
|---|---|
| g | 全局模式，表示查找字符串的全部内容，而不是找到第一个匹配的内容就结束。 |
| i    | 不区分大小写，表示在查找匹配时忽略pattern和字符串的大小写。 |
| m    | 多行模式，表示查找到一行文本末尾时会继续查找。 |
| y    | 粘附模式，表示只查找从lastIndex开始及之后的字符串。 |
| u    | Unicode模式，启用Unicode匹配。 |
| s    | dotAll模式，表示元字符．匹配任何字符（包括\n或\r）。 |



# 元字符

[菜鸟教程-正则表达式元字符](https://www.runoob.com/regexp/regexp-metachar.html)



# 正则表达式方法

[MDN-使用正则表达式](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Regular_Expressions#%E4%BD%BF%E7%94%A8%E6%AD%A3%E5%88%99%E8%A1%A8%E8%BE%BE%E5%BC%8F)
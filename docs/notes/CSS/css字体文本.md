# css字体文本

## 字体属性

```css
font-family
font-size
font-weight
font-style

font-variant
font-stretch
font-size-adjust

font: italic 900 small-caps 15px;
```

## 文本属性

```css
text-indent /*缩进*/
text-align
line-height
vertical-align

word-spacing 字间隔（中文），单词间隔（英文）
letter-spacing 字间隔

文本阴影
text-shadow

文本转换：全大写、全小写、首字母大写
text-transform

文本修饰： 下划线、上划线、删除线、文本闪烁
text-decoration

空白字符的处理方式（如：pre不让浏览器合并多个空格，就像<pre>的效果）
white-space

文本方向 (从左往右读 或 相反)
direction
unicode-bidi

```

## 文字超出显示省略号

```css
overflow: hidden;
word-break: break-all;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 2; /* 最多允许两行 */
-webkit-box-orient: vertical;
```

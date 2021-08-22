# css Transform 变形

## transform

|     移动      |   缩放    |    旋转    |  倾斜   |     其他      |
| :-----------: | :-------: | :--------: | :-----: | :-----------: |
|  translate()  |  scale()  |  rotate()  | skew()  |   matrix()    |
| translate3d() | scale3d() | rotate3d() | skewX() |  matrix3d()   |
| translateX()  | scaleX()  | rotateX()  | skewY() | perspective() |
| translateY()  | scaleY()  | rotateY()  |         |               |
| translateZ()  | scaleZ()  | rotateZ()  |         |               |



### 移动 

```css
/* translate(x, y) */
translate(25px, 10px)
translate(50%, 50%) /* 宽度的 50%， 高度的 50% */
translate(0， 50px)

/* translate3d(x, y, z) */
translate3d(25%, 10%, 50px) /* z轴 不能用百分比 */
```



### 缩放

```css
/* scale(1.2) */
transform: scale(1.2) /* 放大1.2倍 */
transform: scale(0.5) /* 缩小0.5倍 一半 */
transform: scale(0.5, 1.2)

transform: scaleY(1.2)
transform: scaleY(1.2) /* Y轴 放大1.2倍 （高变宽不变） */
transform: scaleX(1.2) /* Y轴 放大1.2倍 （高变宽不变） */

```



### 旋转

```css
/* rotate(x, y) */
transform: rotate(45deg, 15deg)

transform: rotateZ(45deg) /* 常用来让图标旋转，如加载动画 */
```



### 倾斜

```css
/* skewX(x, y) */
transform: skew(15deg, 45deg)
```



### 透视

```css
/* perpective(100px) */
perpective(300px)
perpective(500px)
```



### 矩阵

```css
matrix()
matrix3d()
```



### 设置原点  

```css
/* transform-origin：x y z */
transform-origin: center bottom; /* x:center y:bottom */
transform-origin：50px 25px;
transform-origin: 10% 50%; /* 百分比相对于 对应的轴和元素尺寸计算 */
```



### 修改3D变形方式（*）

```css
transform-style: flat; /* 默认 */
transform-style： preserve-3d;
```



### 修改视域（*）

```css
transform-style: preserve-3d; /* 现在设置这个 */

perspective：800px; 
/* 与perspective() 相似，但有很大不同
   perspective 创建的3d空间是子元素共有的
   perspective() 只对目标元素有效果
*/


/* 修改视域原点 */
perspective-origin：50% 50%; /* 初始值 */
```



### 处理背面

```css
/* backface-visibility */
backface-visibility: visible; /* 旋转后渲染内容 */
backface-visibility: hidden; /* 不渲染内容，相当于旋转后隐藏元素 */
```


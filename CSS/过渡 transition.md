# Transition

| 属性名                     | 说明                                              |
| -------------------------- | ------------------------------------------------- |
| transition-property        | 想应用过渡的属性（如：width height transform 等） |
| transition-duration        | 持续时间                                          |
| transition-timing-function | 时间函数 （默认：ease）                           |
| transition-delay           | 延迟时间（单位：毫秒、秒）                        |

### 简写

```css
/* transition: <property> <duration> <timing-function> <delay>; */
transition: width 0.2s ease-in 5ms;
```



### 禁止过渡效果

```css
transition-property: none;
/* 或 */
transition-duration： 0s;
```



### 过渡事件

#### transitionend

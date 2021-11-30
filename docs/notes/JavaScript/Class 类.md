# Class 类

## 基本

```javascript
class ClassName {
    // 构造函数
    constructor() {
        
    }
    
    // 类的方法
    methodName() {
        
    }
}
```



## extends 继承

```js
class Parent {
    hi = 'hello'

	sayHi() {
        console.log(this.hi)
    }
}

class Son extends Parent {
    
}

let son = new Son;
son.sayHi(); // hello
```



## super 关键字

>   类似于 this , this 指向当前对象，super指向父级

```js
// 可以通过 super 调用父类的属性和方法
super.hi
super.sayHi()
```



## 重写方法

```js
class Parent {
    hi = 'hello'

	sayHi() {
        console.log(this.hi)
    }
}

class Son extends Parent {
    sayHi() {
        console.log(this.hi + ' ，你好')
    }
}

let son = new Son;
son.sayHi(); //  hello ，你好
```



## [重写 constructor](https://zh.javascript.info/class-inheritance#zhong-xie-constructor)

```js
class Parent {
    hi = 'hello'

	sayHi() {
        console.log(this.hi)
    }
}

class Son extends Parent {
    constructor(hi) {
        // 必须调用 super(...)，并且 一定要在使用 this 之前调用。
        super()
        this.hi = hi
    }
}

let son = new Son('Hello!!');
son.sayHi(); //  Hello!!
```



## [重写类字段: 一个棘手的注意要点](https://zh.javascript.info/class-inheritance#zhong-xie-lei-zi-duan-yi-ge-ji-shou-de-zhu-yi-yao-dian)

```js
class Parent {
    hi = 'hello'

	constructor() {
        // 总是使用父类中的 hi
        // 因为子类中的字段是在 super 调用后才初始化的
        // 因此，在父类的构造器里，使用的永远是父类自己的字段，而不是被子类重写的那一个
        console.log(this.hi) // hello
    }
}

class Son extends Parent {
    hi = 'Hello!!';
	
	constructor() {
        super()
    }
}

let son = new Son();

```


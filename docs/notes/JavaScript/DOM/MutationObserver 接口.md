# MutationObserver 接口

>   新引进MutationObserver接口是为了取代废弃的MutationEvent。
>
>   观察DOM的变化，并执行回调



## 创建实例

```js
let observer = new MutationObserver((MutationRecord, MutationObserver) => {
    console.log(MutationRecord);
    console.log(MutationObserver); // MutationObserver的实例
})
```



## observer() 方法

>   使用 observer() 把创建好的实例和DOM关联起来，并设置选项
>
>   observer.observer( <DOM>, <MutationObserverInit>)

```js
// 监听 body 的属性变化，并执行注册的回调函数
observer.observer(document.body, {
    attributes: true
    // attribute、characterData和childList属性必须至少有一项为true
    // 否则会抛出错误
});



// 复用MutationObserver, 同时观察多个节点
// 向页面添加两个节点
let childA = document.createElement('div');
let childB = document.createElement('img');

// 观察两个字节点
observer.observer(childA, {
    attributes: true
});

observer.observer(childB, {
    attributes: true
});
```



![image-20210711154934117](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20210711154934117.png)



## 回调与MutationRecord

>   每个回调都会收到两个参数：MutationRecord实例的数组 和 MutationObserver的实例

![image-20210711151842158](https://raw.githubusercontent.com/JankinWang/PicGo/main/image-20210711151842158.png)



## disconnect() 方法

>   取消观察

```js
// 将停止观察所有目标
observer.disconnect();

// 以上，不仅会停止此后变化事件的回调，也会抛弃已经加入任务队列要异步执行的回调
// 要想让已经加入任务队列的回调执行，可以使用setTimeout()
setTimeout(() => {
    observer.disconnect();
}, 0)


// 调用disconnect()后，
// MutationObserver的生命并不会结束.
// 还可以继续关联目标节点.
observer.observer(document.body, { attributes: true })
```



## takeRecords()方法

>   清空记录队列，取出并返回其中的所有MutationRecord实例
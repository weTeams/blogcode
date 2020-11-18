---
title: React 进阶(7)-高阶函数与高阶组件
author: 随笔川迹
autoGroup-2: React进阶
tags: React
---

## React 中高阶函数与高阶组件

## 快速导航

<TOC />

## 前言

React 中最大的一亮点,就是组件化开发模式,而编写 React 组件,对于无状态的组件,我们可以用函数式组件编写,而复杂的组件(聪明组件/外层组件)可以用类`class`编写组件

在 React 中提到了高阶函数与高阶组件,一直以来,对它们都是持以仰望的,逼格高的词调,常常把自己给整晕的,做个记录总结一下的

## 什么是高阶函数?

### 函数可以被作为参数传递

如下:经常用到的`setTimeout`,`setInterval`
:::: tabs type:border-card
::: tab setTimeout 高阶函数 lazy

```js
setTimeout(function() {
  console.log('itclanCoder');
}, 2000);
```

`setTimeout` 是一个定时器函数,接收两个参数,第一个参数是一个匿名函数,第二个参数是时间
过了 2 秒后,执行匿名函数中的代码
:::
::: tab setInterval 高阶函数 lazy

```js
setInterval(() => {
  console.log('http://coder.itclan.cn');
}, 2000);
```

`setTinterval` 是一个定时器函数,同样接收两个参数,第一个参数是箭头函数,每个参数时间参数
每隔 2 秒执行一次箭头函数
:::
::: tab 说明 lazy
类似这样的高阶函数:`clearInterval` 清除定时器等,**将函数作为形参数放到一个函数中执行的,这个函数可以视为高阶函数**
数组中的一些迭代器函数都可以视为高阶函数:`map`,`filter`,`forEach`,`reduce`,`find`等
:::
::::

### 函数作为返回值输出

一个函数可以有返回值,也可以无返回值,若无指定返回值,它会默认返回`undefined`

函数是对象,这意味着函数可以存储在一个变量,数组,或对象中,同时函数可以传递给函数,并由函数返回,它可以拥有属性,也可以是一个值,可以像`JavaScript`中的其他表达式那样被当做参数一个传递

```js
function foo(x) {
  return function() {
    return x;
  };
}
```

上面的 foo 函数接收的形参是`x`,函数 foo 的返回值是一个匿名函数,匿名函数返回值返回形参`x`

那么此时`foo`函数就是以函数作为返回值作为输出的高阶函数

### 高阶函数应用

:::: tabs type:border-card
::: tab 定时器 setTimeout 应用 lazy

```js
setTimeout(function() {
  console.log('itclanCoder');
}, 2000);
```

隔 2 秒后打印 itclancoder
:::
::: tab 定时器 setInterval 应用 lazy

```js
setInterval(function() {
  console.log('http://coder.itclan.cn/');
}, 2000);
```

每隔 2 秒打印一次`http://coder.itclan.cn/`
:::
::: tab Ajax 应用 lazy

```js
$.get('url?params',function() {
  console.log("获取数据");
})

axios.get('url', function() {
    console.log("获取数据");
})
...
```

上面的`get`函数都可以视为高阶函数
:::
::: tab Es5-Es5 新增的一个迭代器方法 lazy

```js
some(),every(),map(),forEach(),reduce(),find(),filter()等
```

:::
::: tab 函数节流应用 lazy

```js
function throttle2(method, duration) {
  // 当前时间间隔内是否有方法执行,设置一个开关标识
  var runFlag = false;
  // 返回一个事件处理函数
  return function(e) {
    // 判断当前是否有方法执行,有则什么都不做,若为true,则跳出
    if (runFlag) {
      return false;
    }
    // 开始执行
    runFlag = true;
    // 添加定时器,在到达时间间隔时重置锁的状态
    setTimeout(function() {
      method(e);
      // 执行完毕后,声明当前没有正在执行的方法,方便下一个时间调用
      runFlag = false;
    }, duration);
  };
}
```

函数节流保证一段时间内只执行一次核心代码,连续每隔一定的时间触发执行的函数
上面使用的是重置一个开关变量+定时器的方式实现函数节流
:::
::: tab 函数防抖应用 lazy

```js
function debounce(method, duration) {
  var timer = null;
  return function() {
    var that = this,
      args = arguments;
    // 在本次调用之间的一个间隔时间内若有方法在执行,则终止该方法的执行
    if (timer) {
      clearTimeout(timer);
    }
    // 开始执行本次调用
    timer = setTimeout(function() {
      method.apply(that, args);
    }, duration);
  };
}
```

函数的防抖:延迟事件处理函数的执行,一定时间间隔内只执行最后一次操作
:::
::: tab 函数柯里化 lazy

```js
// 普通的add函数
function add(x, y) {
  return x + y;
}

// 柯里化后
function curryingAdd(x) {
  return function(y) {
    return x + y;
  };
}

add(1, 2); // 3
curryingAdd(1)(2); // 3
```

以上是把`add`函数的`x`，`y`两个参数变成了先用一个函数接收`x`然后返回一个函数去处理`y`参数

只传递给函数一部分参数来调用它，让它返回一个函数去处理剩下的参数。
:::
::::

## 高阶组件

**概念**: 高阶组件就是接收一个组件作为参数并返回一个新组件的函数
**说明**: 高阶组件是一个函数,并不是组件

例如:如下面的弹出框

<template>
   <div class="pop">
        <div class="pop-box">
             <div class="header">
                  <div>提示</div>
                  <div><i class="el-icon-circle-close icon-close-btn"></i></div>
             </div>
        </div>
        <div class="pop-box">
              <div class="header">
                  <div>提示</div>
                  <div><i class="el-icon-circle-close icon-close-btn"></i></div>
             </div>
        </div>
   </div>
</template>
<script>
export default {
  data() {
    return {

    }

},

}
</script>

<style>
.pop {
  display: flex;
  justify-content: center;
}

.pop-box {
  width: 300px;
  height: 400px;
  border:1px solid #de3636;
}

.pop-box:nth-child(1) {
  margin-right: 30px;
}

.header {
  display: flex;
  height: 50px;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  background:#de3636;
  color:#fff;
}

.icon-close-btn {
  font-size: 25px;
  color:#fff;
}
</style>

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

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

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

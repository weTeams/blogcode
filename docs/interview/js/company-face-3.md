---
title: Js 笔试真题-3
---

## 快速导航

<TOC />

## 第 1 题-解析 URL 提取 params 参数

## 目标

将常规的 URL 字符串的参数解析为对象的形式,如下示例所示

```js
let httpUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
```

解析后结果如下

```js
{ "name": "itclanCoder", "study":  "css" }
```

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css`" />

## 代码实现

- ### 方式 1-split 字符串分割

::: details 点击即可查看使用 split 方式实现

```js
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
// 参数转成对象
function queryString(str) {
  let params = str.split('?')[1]; //截取?号后的字符串即name=itclanCoder&study=css
  let param = params.split('&'); // 通过&符号进行分割即["name=itclanCoder", "study=css"]
  let obj = {}; // 用一个对象存储目标值
  for (let i = 0; i < param.length; i++) {
    // 循环遍历截取出来的param数组
    let paramsA = param[i].split('='); // 通过split,=继续对数组params每一项进行分割,生成数组["name", "itclanCoder"]
    let key = paramsA[0]; // 取数组项["name", "itclanCoder"]中第0位,即name
    let value = paramsA[1]; // 取数组项["name", "itclanCoder"]中第1位,即itclanCoder
    obj[key] = value;
  }
  return obj;
}
console.log(queryString(baseUrlStr)); // {name: "itclanCoder", study: "css"]}
```

:::

- ### 方式 2-正则表达式

::: details 点击即可查看正则表达式方式实现

```js
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css';
const queryURLParameter = (url) => {
  let regx = /([^&?=]+)=([^&?=]+)/g;
  let obj = {};

  url.replace(regx, (...args) => {
    if (obj[args[1]]) {
      obj[args[1]] = Array.isArray(obj[args[1]])
        ? obj[args[1]]
        : [obj[args[1]]];
      obj[args[1]].push(args[2]);
    } else {
      obj[args[1]] = args[2];
    }
  });

  return obj;
};

console.log(queryURLParameter(baseUrlStr)); // {name: "itclanCoder", study: "css"}
```

:::

### 拓展

`params`请求参数,可以多个,也就是如下所示,那怎么办?

```
let baseUrlStr = 'https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react';
```

经过转换,最终结果为

```
{name: "itclanCoder",study: ['css','js','react']}
```

具体代码如下所示

::: details 点击即可查看

```js
let baseUrlStr =
  'https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react';
// 参数转成对象
function queryString(str) {
  let params = str.split('?')[1];
  let param = params.split('&');
  let obj = {};
  for (let i = 0; i < param.length; i++) {
    let paramsA = param[i].split('=');
    let key = paramsA[0];
    let value = paramsA[1];

    if (obj[key]) {
      // 主要是在这里做了一下处理,判断值是不是一个数组
      obj[key] = Array.isArray(obj[key]) ? obj[key] : [obj[key]];
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }
  return obj;
}
console.log(queryString(baseUrlStr)); //{name: "itclanCoder",study: ["css", "js", "react"]}
```

:::

::: tip 提示
主要在中间做了一下处理,判断是不是数组,这个有点虐心,虽然平常遇到的场景不是特别多,但是也是有这种情况的,有次面试就被折腾得不行的,回来脑补了一下的
:::

## 第 2 题-var let const 的区别

共同点:定义声明变量
不同点:

- var 声明的变量可以重复声明,没有块的概念,可以跨块访问,不能跨函数访问,当出现相同的变量名时,后者会覆盖前者,`let`,`const`有块级作用域,并且不可重复声明(不存在变量提升，所以用 let 定义的变量一定要在声明后再使用，否则会报错)
- let 定义的变量,只能在块作用域中访问(也就是在花括号内访问),不能跨函数访问
- const 用来定义常量,使用时得先初始化,然后在赋值,只能在块作用域里访问,而且不能修改
- let 和 var 的不同是，在变量声明之前就访问变量的话，会直接提示 `ReferenceError`，而不像 var 那样使用默认值 `undefined`

## 第 3 题-什么是暂时性死区

如果区块(花括号)中存在`let`命令,这个区块对这些命令声明的变量,从一开始就形成了封闭作用域,凡是在声明之前就使用这些变量,就会报错,所以在代码块内,使用`let`命令声明变量之前,该变量都是不可用的

这被称为暂时性死区

```js
let sName = 'itclan';
if (true) {
  console.log(sName); // Uncaught ReferenceError:sName is not defined
  let sName = 'itclan';
}
```

当前作用域顶部到该变量声明位置中间的部分,都是该`let`变量的死区,在死区中,禁止访问该变量

所谓暂时性死区,就是具有块级作用域,变量需要先声明,然后在使用,否则的话,就会报错,即使用`typeof`检测一个变量,会报错`ReferenceError`

```js
typeof sName; // ReferenceError
let name;
```

只要块级作用域内存在 let 命令,它所声明的变量就绑定了这个区域,不再受外部的影响,在代码块中,使用`let`命令声明变量之前,该变量都是不可用的

## 第 4 题-JavaScript 中的 window.onload 事件和 jQuery 的 ready 函数有何区别

**执行时机:** `window.onload`必须等待网页中所有内容加载完毕后(包括图片)才能执行,而`$(document).ready()`是网页中所有`DOM`结构绘制完毕后执行,可能`DOM`元素关联的东西并没有加载完,在`DOM`完全就绪时就可以被调用,此时,网页的所有元素对`JQuery`而言都是可以访问的,但是这并不意味着这些元素关联的文件都已经下载完毕
**编写个数:** `window.onload`不能同时编写多个,而`$(document).ready()`能同时编写多个

```js
window.onload = function() {
  alert('test1`');
};

window.onload = function() {
  alert('test2');
};
// 结果只会输出test2
```

而`$(document).ready()`能同时编写多个

```js
$(document).ready(function() {
  alert('Hello world');
});

$(document).ready(function() {
  alert('hello itclanCoder');
});
// 结果会两次输出
// 可以简写成
$(function() {
  //..
});
```

## 第 5 题-通过什么方法可以实现-检测页面 DOM 变化

## 第 6 题-如何监控 js 对象属性的变化?

## 第 7 题-介绍几个场景会用到 canvas

## 第 8 题-骨架屏是什么,如何实现?

## 在线测试

<iframe-lineTestCode />

<parseurl-parseUrl :url="`https://coder.itclan.cn?name=itclanCoder&study=css&study=js&study=react`" />

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

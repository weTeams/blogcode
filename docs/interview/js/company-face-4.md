---
title: Js 笔试真题-4
---

## 快速导航

<TOC />

## 第 1 题-函数柯里化

实现一个相加函数 add,使 add(3)(4) 的返回值为 7

- ### 常规写法

::: details 点击即可查看

```js
function add(a, b) {
  return a + b;
}

add(3, 4);
```

:::

- ### 函数柯里化

::: details 点击即可查看

```js
function add (x) {
  retrun function(y) {
    return x+y;
  }
}

add(3)(4);
```

:::

## 第 2 题-有关变量访问-作用域问题-this 指向

请写出以下代码运行后的输出结果

```js
var a = {
  b: 2,
  fun1: function() {
    console.log(this.b);
  },
};

var fun2 = a.fun1;
a.fun1();
fun2();
```

::: details 点击即可查看答案
**答案:** `2`, `undefined`

```
**


```

:::

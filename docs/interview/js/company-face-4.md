---
title: Js 笔试真题-4
---

## 快速导航

<TOC />

## 函数柯里化

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

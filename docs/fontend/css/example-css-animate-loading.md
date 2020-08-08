---
title: css实现loading加载
---

## css 实现 loading 加载

## 快速导航

<TOC />

## 正方形加载 Loading1

<loading-Loading1 />

html 代码

::: details 点击即可查看

```html
<div class="load-container">
  <div class="boxLoading"></div>
</div>
```

:::

css 代码
::: details 点击即可查看

```css
.load-container {
  position: relative;
  width: 200px;
  height: 200px;
  margin: 0 auto;
  .boxLoading {
    width: 50px;
    height: 50px;
    margin: auto;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    &:before {
      content: '';
      width: 50px;
      height: 5px;
      background: #000;
      opacity: 0.1;
      position: absolute;
      top: 59px;
      left: 0;
      border-radius: 50%;
      animation: shadow 0.5s linear infinite;
    }
    &:after {
      content: '';
      width: 50px;
      height: 50px;
      background: #00adb5;
      animation: animate 0.5s linear infinite;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 3px;
    }
  }
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
@keyframes shadow {
  0%,
  100% {
    transform: scale(1, 1);
  }
  50% {
    transform: scale(1.2, 1);
  }
}
```

:::

## 圆形加载 loading2

<loading-Loading2 />

html 代码
::: details 点击即可查看代码

```html
<div class="load-container">
  <svg id="load" x="0px" y="0px" viewBox="0 0 150 150">
    <circle id="loading-inner" cx="75" cy="75" r="60" />
  </svg>
</div>
```

:::

css 代码
::: details 点击即可查看代码

```css
.load-container {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  height: 150px;
}
#load {
  width: 75px;
  animation: loading 3s linear infinite;
  #loading-inner {
    stroke: {
      dashoffset: 0;
      dasharray: 300;
      width: 10;
      miterlimit: 10;
      linecap: round;
    }
    animation: loading-circle 2s linear infinite;
    stroke: #00adb5;
    fill: transparent;
  }
}
@keyframes loading {
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes loading-circle {
  0% {
    stroke-dashoffset: 0;
  }
  100% {
    stroke-dashoffset: -600;
  }
}
```

:::

## 圆形加载 Loading3

<loading-Loading3 />

html 代码
::: details 点击即可查看

```
<div class="load"></div>
```

:::
css 代码
::: details 点击即可查看

```css
.load {
  width: 50px;
  height: 50px;
  margin: 0 auto;
  position: relative;
  border-radius: 50%;
  overflow: hidden;
  background-color: rgba(0, 169, 178, 0.2);
  &::before {
    content: '';
    width: 70px;
    height: 70px;
    background-color: #00adb5;
    position: absolute;
    left: 50%;
    bottom: 50%;
    z-index: 1;
    transform-origin: left bottom;
    animation: rotate 1.5s infinite linear;
  }
  &::after {
    content: '';
    width: 40px;
    height: 40px;
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    margin: auto;
    background-color: #fff;
    z-index: 2;
    border-radius: 50%;
  }
}
@keyframes rotate {
  0% {
    transform: rotate(0);
  }
  50% {
    transform: rotate(180deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
```

:::

## 圆形加载 Loading4

<loading-Loading4 />

html 代码
::: details 点击即可查看代码

```html
<div class="load-container">
  <div class="container">
    <div class="boxLoading boxLoading1"></div>
    <div class="boxLoading boxLoading2"></div>
    <div class="boxLoading boxLoading3"></div>
    <div class="boxLoading boxLoading4"></div>
    <div class="boxLoading boxLoading5"></div>
  </div>
</div>
```

:::
css 代码
::: details 点击即可查看代码

```css
.load-container {
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  .container {
    width: 50px;
    height: 60px;
    text-align: center;
    font-size: 10px;
    .boxLoading {
      background-color: #00adb5;
      height: 100%;
      width: 6px;
      display: inline-block;
      -webkit-animation: stretchdelay 1.2s infinite ease-in-out;
      animation: stretchdelay 1.2s infinite ease-in-out;
    }
    .boxLoading2 {
      -webkit-animation-delay: -1.1s;
      animation-delay: -1.1s;
    }
    .boxLoading3 {
      -webkit-animation-delay: -1s;
      animation-delay: -1s;
    }
    .boxLoading4 {
      -webkit-animation-delay: -0.9s;
      animation-delay: -0.9s;
    }
    .boxLoading5 {
      -webkit-animation-delay: -0.8s;
      animation-delay: -0.8s;
    }
  }
}
@-webkit-keyframes stretchdelay {
  0%,
  40%,
  100% {
    -webkit-transform: scaleY(0.4);
  }
  20% {
    -webkit-transform: scaleY(1);
  }
}
@keyframes stretchdelay {
  0%,
  40%,
  100% {
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }
  20% {
    transform: scaleY(1);
    -webkit-transform: scaleY(1);
  }
}
```

:::

## 正方形翻转 loading5

<loading-Loading4 />

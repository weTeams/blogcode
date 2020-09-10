---
title: 鼠标移到边框时效果
autoGroup-2: 常见实例技巧
---

## 快速导航

<TOC />

## 鼠标移到边框时效果

## 具体效果实现

<exampleskill-mouseBorder />

## 具体代码实现

::: details 点击即可查看 html 代码

```html
<div id="draw-border">
  <button>Hover</button>
</div>
```

:::

::: details 点击即可查看 css 代码

```css
#draw-border {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 15vh;
}

button {
  border: 0;
  background: none;
  text-transform: uppercase;
  color: #4361ee;
  font-weight: bold;
  position: relative;
  outline: none;
  padding: 10px 20px;
  box-sizing: border-box;
}

button::before,
button::after {
  box-sizing: inherit;
  position: absolute;
  content: '';
  border: 2px solid transparent;
  width: 0;
  height: 0;
}

button::after {
  bottom: 0;
  right: 0;
}

button::before {
  top: 0;
  left: 0;
}

button:hover::before,
button:hover::after {
  width: 100%;
  height: 100%;
}

button:hover::before {
  border-top-color: #4361ee;
  border-right-color: #4361ee;
  transition: width 0.3s ease-out, height 0.3s ease-out 0.3s;
}

button:hover::after {
  border-bottom-color: #4361ee;
  border-left-color: #4361ee;
  transition: border-color 0s ease-out 0.3s, width 0.3s ease-out 0.3s,
    height 0.3s ease-out 1s;
}
```

:::

## 鼠标经过圆形效果

<exampleskill-circularEffect />

## 具体实例代码

::: details 点击即可查看 html 效果

```html
<div id="circle-btn">
  <div class="btn-container">
    <button>Hover</button>
  </div>
</div>
```

:::

::: details 点击即可查看 css 代码

```css
#circle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 20vh;
}

.btn-container {
  position: relative;
}

button {
  border: 0;
  border-radius: 50px;
  color: white;
  background: #5f55af;
  padding: 15px 40px 16px 40px;
  text-transform: uppercase;
  background: linear-gradient(to right, #f72585 50%, #5f55af 50%);
  background-size: 200% 100%;
  background-position: right bottom;
  transition: all 2s ease;
}

button:hover {
  background-position: left bottom;
}
```

:::

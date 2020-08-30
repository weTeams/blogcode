---
title: React 基础(7)-React中的事件处理
collapsable: true
autoGroup-1: React基础
---

## React 基础(7)-React 中的事件处理

## 快速导航

<TOC />

## 前言

`props`与`state`都是用于组件存储数据的一`js`对象,前者是对外暴露数据接口,后者是对内组件的状态,它们决定了`UI`界面显示形态,而若想要用户与界面有些交互动作

也就是`web`浏览器通知应用程序发生了什么事情,例如:鼠标点击,移动,键盘按下等页面发生相应的反馈,它是用户与文档或者浏览器窗口中发生的一些特定的交互瞬间. 这个时候就需要用事件实现了

在原生`JS`操作`DOM`中,往往有如下方式

- 内联方式(在`HTML`中直接事件绑定)

```js
<p onclick="alert('关注微信itclanCoder公众号')"></p>
```

- 直接绑定(对象.事件类型 = 匿名函数

```js
// DOM元素对象.事件类型 = 匿名函数
obj.onclick = function(){})
```

- 事件委托监听方式

```js
//对象.addEventListener('事件类型,不带on', 回调函数))对DOM对象进行事件监听处理
document.addEventListener('click', function() {
  alert('川川是个全宇宙最帅的小伙子');
});
```

而在`React`中事件处理和内联方式相似,但是却有些不同

如何确保函数可以访问组件的属性?

如何传递参数给事件处理器回调? 怎样阻止函数被调用太快或者太多次?

频繁操作`DOM`会造成浏览器的卡顿,响应不及时,引起浏览器的重绘重排,从而加重了浏览器的压力

频繁的调用后台接口,好好的接口被前端玩坏,造成页面空白,崩溃,容易被后端同学提刀来见

既要提升用户体验,又要减少服务器端的开销

那么本篇就是你想要知道的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/01-guide.jpg" alt="todolist" />
</div>

## React 中的事件

在`React`中事件的绑定是直接写在`JSX`元素上的,不需要通过`addEventListener`事件委托的方式进行监听

**写法上**:

- 在`JSX`元素上添加事件,通过`on*EventType`这种内联方式添加,命名采用小驼峰式(`camelCase`)的形式,而不是纯小写(原生 HTML 中对`DOM`元素绑定事件,事件类型是小写的),无需调用`addEventListener`进行事件监听

- 也无需考虑兼容性,`React`已经封装好了一些的事件类型属性(`ps:onClick`,`onMouseMove`,`onChange`,`onFocus`)等
  使用`JSX`语法时,需要传入一个函数作为事件处理函数,而不是一个字符串,也就是`props`值应该是一个函数类型数据,事件函数方法外面得用一个双大括号包裹起来

- `on*EventType`的事件类型属性,只能用作在普通的原生`html`标签上 (例如:`div`,`input`,`a`,`p`等,例如:

```js
<div onClick={事件处理函数}></div>
```

无法直接用在自定义组件标签上,也就是: 下面这样

```js
<Button onClick={事件处理方法}></Button>
```

这样写是不起作用的,要想解决,也有方法,借用第三方库,`styled-component`,`这个我们在后续的内容当中单独拿出来讲的

不能通过返回`false`的方式阻止默认行为,必须显示使用`preventDefault`,如下所示

```js
// 在React中无法通过return false阻止默认事件,下面是错误的写法
function handleClick() {
  // 逻辑代码
  return false;
}
// 正确的写法,应该用preventDefault去阻止默认事件
function handleClick(event) {
  event.preventDefault();
}
```

## event(事件)对象

事件是`web`浏览器通知应用程序发生的什么事情,例如:鼠标点击,移动，键盘按下等

它并不是`javascript`对象,但是由事件触发的事件处理函数接收携带的事件对象参数(`event`),它会记录这个事件的一些详细的具体信息

```js
<a href="#" onClick = { this.handleLink} >链接</a>

handleLink(event){
 event.preventDefault();
 console.log(event);
}
```

event 会记录该事件对象的信息,如下图所示

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/base-react-event-handle/02-event.jpg" alt="todolist" />
</div>

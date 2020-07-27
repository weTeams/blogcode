---
title: vue基础面试题
---

## vue 基础面试题

<TOC />

## 第 1 题-为什么 vue 组件中的 data 是函数而不是对象

```js
export default {
  data() {
    // data是一个函数,data: function() {}的简写
    return {
      // 页面要初始化的数据
      name: 'itclanCoder',
    };
  },
};
```

而非:如下所示

```js
export default {
  data: {
    // data是一个对象
    name: 'itclanCoder',
  },
};
```

当一个组件被定义,`data`必须声明为返回一个初始数据对象的函数,因为组件可能被用来创建多个实例

也就是说,在很多页面中,定义的组件可以复用在多个页面

**如果`data`是一个纯碎的对象,则所有的实例将共享引用同一份`data`数据对象,无论在哪个组件实例中修改`data`,都会影响到所有的组件实例**

**如果`data`是函数,每次创建一个新实例后,调用`data`函数,从而返回初始数据的一个全新副本数据对象**

这样每复用一次组件,会返回一份新的`data`数据,类似于给每个组件实例创建一个私有的数据空间,让各个组件的实例各自独立,互不影响,保持低耦合

可以看下面一段代码

```js
// 声明构造器函数
function Person() {}

Person.prototype.data = {
  // 原型下挂载一对象,并有name属性
  name: 'itclanCoder',
};

var p1 = new Person();
var p2 = new Person();
p1.data.name = '川川';
console.log(p1.data.name); // 川川
console.log(p1.data.name); // 川川
```

挂载在原型下属性如果是一个对象,实例化出来的对象(p1,p2)都指向的是同一份实体

原型下的属性相当于是共有的

修改一个实例对象下的属性,也会造成另一个实例属性跟着改变,这样在组件复用的时候,肯定是不行的,那么改成函数就可以了的

```js
function Person() {
  this.data = this.data();
}

Person.prototype.data = function() {
  return {
    name: 'itclanCoder',
  };
};

var p1 = new Person();
var p2 = new Person();

p1.data.name = '随笔川迹'; // 如果是函数的形式去定义属性,它是有自定的作用域的,在修改的时候不会影响到别人
console.log(p1.data.name); // 随笔川迹
console.log(p2.data.name); // itclanCoder
```

## 第 2 题-vue-router 路由的模式

`vue-router` 默认 `hash` 模式 —— 使用 `URL` 的 `hash` 来模拟一个完整的 `URL`，于是当 `URL` 改变时，页面不会重新加载

如下所示

```js
http://localhost/#home
```

如果觉得`hash`很丑，我们可以用路由的 `history` 模式，这种模式充分利用 `history.pushState API`来完成 `URL`跳转而无须重新加载页面

```js
const router = new VueRouter({
  mode: 'history',
  routes: [...]
})
```

如下所示

```js
http://localhost/home
```

配置路由模式:

- `hash`: 使用 `URL hash` 值来作路由。支持所有浏览器，包括不支持 `HTML5 History Api`的浏览器。
- `history`: 依赖 `HTML5 History API` 和服务器配置。查看 `HTML5 History` 模式。
- `abstract`: 支持所有 `JavaScript` 运行环境，如 `Node.js` 服务器端。如果发现没有浏览器的 `API`，路由会自动强制进入这个模式

`base`为应用的基础路径,例如:整个单页面应用服务在`/app/`下,那么`base`就应该设为`/app/`,当你在`HTML5 history`模式下使用`base`选项之后,所有的`to`属性都不需要写基础路径了

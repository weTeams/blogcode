---
title: vue基础面试题
autoGroup-1: vue基础面试题
---

## vue 基础面试题

<TOC />

## 第 1 题-说一说 vue 中的模板编译原理

将`template转换成render函数`,在开发时尽量不要使用`template`,因为将`template`转换成`render`方法需要在运行时进行编译操作会有性能损耗,同时引用带有`compiler`包的`vue`体积也会变大,默认`.vue`文件中的`template`处理是通过`vue-loader`来进行处理的并不是通过运行时的编译

1. 将`template`模板转换成`ast`语法树-`parserHTML`
2. 对静态语法做静态标记-`markUp`
3. 重新生成代码

## 第 2 题-Proxy 与 Object.defineProperty 优劣对比

Proxy 的优势如下

1. Proxy 可以直接监听对象而非属性
2. proxy 可以直接监听数组的变化
3. proxy 有多达 13 种拦截方法,不限于`apply`,`ownKeys`,`deleteProperty`,`has`等`Object.defineProperty`不具备的
4. Proxy 返回的是一个新对象,我们可以只操作新对象达到目的,而`Object.defineProperty`只能遍历对象属性直接修改
5. Proxy 作为新标准将受到浏览器厂商重点持续的性能优化

## 第 3 题-Vue3.x 响应式数据原理

`vue3.x`改用`proxy`替代`Object.defineProperty`因为`Proxy`可以直接监听对象和数组的变化,并且有多达 13 种拦截方法,作为新标准将受到浏览器厂商重点持续的性能优化

Proxy 只会代理对象的第一层,那么 vue3 又是怎样处理这个问题呢

判断当前`Reflect.get`的返回值是否为`Object`,如果是则在通过`reactive方法`做代理,这样就实现了深度观测

监听数组的时候可能触发多次`get/set`那么如何放置触发多次呢

可以判断`key`是否为当前代理对象`target自身属性`，也可以判断旧值与新值是否相等,只有满足上面两个条件之一时，才有可能执行 trigger

## 第 4 题-Vue 组件间通信有哪几种方式?

Vue 组件间通信主要指以下 3 类通信: 父子组件通信,隔代组件通信,兄弟组件通信,下面分别介绍每种通信方式以及适用于哪类组件间通信

1. `props/$emit`适用于父子组件通信,这种方法是`vue`组件的基础
2. `ref`与`$parent/$children`适用于父子组件通信
3. `ref`与`$parent/$children`适用父子组件通信
4. `ref`:如果在普通的`DOM`元素上使用,引用指向的就是`DOM`元素,如果用在子组件上,引用的就指向组件的实例
5. `$parent/$children`:访问父/子实例
6. `EventBus($emit/$on)`:适用于父子,隔代,兄弟组件通信
   这种方法通过一个空的`vue`实例作为中央事件总线(事件中心),用它来触发事件和监听事件,从而实现任何组件间的通信,包括父子,隔代,兄弟组件
7. `$attrs/$listeners`适用于隔代组件通信
8. `$attrs`: 包含了父作用域中不被`prop`所识别(且获取)的特性绑定(class 和 style 除外),当一个组件没有声明任何`prop`时,这里会包含所有父作用域的绑定(`class`和`style`除外),并且可以通过`v-bind="$attrs"`传入内部组件,通常配合`inheritAttrs`选项一起使用
9. `$listeners`:包含了父作用域中的(不含`.native`修饰器的)`v-on`事件监听器,它可以通过`v-on="$listeners"`传入内部组件
10. `provide/inject`适用于隔代组件通信
    祖先组件通过 provider 来提供变量,然后在子孙组件中通过`inject`来注入变量,`provide/inject API`主要解决跨级组件间通信的问题,不过它的使用场景,主要是子组件获取上级组件的状态,跨级组件间建立一种主动提供与依赖注入的关系
11. `vuex`适用于父子,隔代,兄弟组件通信
`Vuex`是一个专为`vue.js`应用程序开发的状态管理模式,每一个`vuex`应用的核心就是`store`(仓库),`store`基本上就是一个容器,它包含着你应用中大部分的状态(`state`) 

## 第5题-组件中写`name`选项有哪些好处及作用

1. 可以通过名字找到对应的组件(递归组件)
2. 可以通过`name`属性来实现缓存功能(`keep-alive`)
3. 可以通过`name`来识别组件(跨级组件通信时非常重要)
```js
Vue.extend = function () {
    if(name) {
        Sub.options.componentd[name] = Sub
    }
}
```
## 第6题-keep-alive平时在哪里使用?原理是?

`keep-alive`主要是组件缓存,采用`LRU`算法

常用的两个属性`include/exculde`,允许组件有条件的进行缓存
两个生命周期`actived/deactivated`用来得知当前组件是否处于活跃状态
```js
abstract: true, // 抽象组件 
props:{
    include: patternTypes,  // 要缓存的有哪些
    exclude: patternTypes, // 要排除的有哪些
    max: [String, Number] //最大缓存数量 
}
if(cache[key]) { // 通过key 找到缓存，获取实例
    vnode.componentInstance = cache[key].componentInstance
    remove(keys, key) //将key删除掉 
    keys.push(key) // 放到末尾 
} else {
    cache[key] = vnode // 没有缓存过 
    keys.push(key) //存储key
    if(this.max && keys.length > parseInt(this.max)) { // 如果超过最大缓存数 
    // 删除最早缓存的 
    pruneCacheEntry(cache, keys[0], keys, this._vnode)
}
}
vnode.data.keepAlive = true // 标记走了缓存 
```

## 第6题-Vue.minxin的使用场景和原理?

`Vue.mixin`的作用就是抽离公共的业务逻辑,原理类似`对象的继承`,当组件初始化时会调用`mergeOptions`方法进行合并,采用策略模式针对不同的属性进行合并,如果混入的数据和本身组件中的数据冲突,会采用"就近原则"以组件的数据为准


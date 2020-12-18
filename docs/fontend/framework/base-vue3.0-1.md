<!--

## 快速导航

<TOC />

## 前言

## vue3.0 几大亮点

1. 性能比 vue2.x 快 1~2 倍
2. 按需编译,体积比 vue2.x 更小
3. composion API:组合 API(类似 React Hooks)
4. 更好的支持 TS
5. custom Render API: 暴露了自定义渲染 API
6. 更先进的组件

### vue3.0 是如何变快的?

1. diff 方法的优化
2. https://template-explorer.vuejs.org/#
   https://vue-next-template-explorer.netlify.app/#

vue2.0 中虚拟 DOM 是进行全量的对比
vue3.0 新增了静态标记
在于上次虚拟节点进行对比的时候,只对比带有 patch flag 的节点
并且可以通过 flag 的信息得知当前节点要对比的具体内容

```js
export const enum PatchFlags {
  TEXT =1, // 动态文本节点
  CLASS = 1 << 1, // 2动态class
  STYLE = 1 << 2, // 4 动态style
  PROPS = 1 << 3, // 8 动态属性,但不包含类名和样式
  FULL_PROPS = 1 << 4, // 16, 具有动态key属性,当key改变时,需要进行完整的diff比较
  HYDRATE_EVENTS = 1 << 5, // 32 带有监听事件的节点
  STABLE_PRAGMENT = 1<< 6, // 64， 一个不会改变子节点顺序的fragment
  KEYED_FRAGMENT = 1 << 7, // 128 带有key属性的Fragment或部分子节有key
  KEYED_FRAGMENT = 1<<8, // 256 子节点没有key的fragment
  NEEA_PATCH = 1<< 9, //512 一个节点只会进行费props比较
}
```

hostStatic 静态提升

1. vue2.0 中无论元素是否参与更新,每次都会重新创建
2. vue3.0 中对于不参与更新的元素,只会被创建一次,之后会在每次渲染的时候被不停的复用

cacheHandless 事件监听器缓存
默认情况下 onClick 会被视为动态绑定,所以每次都会去追踪它的变化
但是因为是同一个函数,所以没有追踪变化,直接缓存起来复用即可

只要观察有没有静态标记即可
因为我们知道在 vue3.0 的 diff 算法中,只有静态标记才会去比较,进行追踪

ssr 渲染

当有大量静态的内容的时候,这些内容会被当作纯字符推进一个 buffer 里面
即使存在动态的绑定,会通过模板插值嵌入进去,这样会比通过虚拟 DOM 来渲染的快很多
当静态内容大到一定量级的时候,会用 createStaticVNode 方法在客户端去生成一个 static node

这些静态 node,会被直接 innerHTML,就不需要创建对象,然后根据对象渲染

## 创建 vue3.0 的 3 种方式

1. vue-cli
2. webpack
3. vite

## 什么是 vite

vite 是 vue 作者开发的一款意图取代 webpack 的工具
其实现原理是利用 Es6 的 import 会发送请求去加载文件的特性
拦截这些请求,做一些预编译,省去 webpack 冗长的打包时间

## 安装 vite

```
npm install -g crate-vite-app
```

利用 vite 创建 vue3 项目
create-vite-app projectName
安装依赖运行项目
cd projectname
npm install
npm run dev

vue3.0 兼容 vue2.x

## webpack

git clone https://github.com/vuejs/vue-next-webpack-preview.git projectName

cd projectName
npm install
npm run dev

## vue-cli

npm install -g @vue/cli
vue create projectName
cd projectName
vue add vue-next
npm run serve -->

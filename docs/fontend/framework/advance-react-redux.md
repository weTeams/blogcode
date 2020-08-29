---
title: React进阶(6)-react-redux的使用
autoGroup-2: React进阶
---

## react-redux 的使用

## 快速导航

<TOC />

## 前言

您将在本文当中学习到

- `react-redux`是什么,解决什么问题
- `UI`组件以及容器组件
- `react-redux`中两个重要的`API`,``Provider`以及`connect`
- `mapStateToProps`以及`mapDispatchToProps`等的学习

是不是搞不清楚`React`与`Redux`,以及`React-Redux`的关系?是不是不清楚`mapStateToProps`以及`mapDispatchToProps`的使用?

那么本文就是你想要知道的

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/advance-react-redux/01-guide.jpg" alt="todolist" />
</div>

## react-redux 是什么

以下是上节内容的代码结构,完成的一个`todolist`,并对`Redux`进行了拆分,按功能模块化管理

```js
├─.gitignore
├─package-lock.json
├─package.json
├─README.md
├─yarn-error.log
├─yarn.lock
├─src                              // 源代码主要目录
|  ├─index.js                   // 入口文件
|  ├─views                      // 视图
|  |   └TodoList.js
|  ├─store                    // Redux中store组件的公共数据状态
|  |   ├─actionCreators.js   // action创建者
|  |   ├─actionTypes.js       // actionTypes的类型,定义成常量
|  |   ├─index.js                 // 创建store的主文件
|  |   └reducer.js                // 创建的reducer
|  ├─components             // UI组件
|  |     └TodoListUI.js
├─public
|   ├─favicon.ico
|   ├─index.html
|   └manifest.json
```

**`Redux`**: 是一个用于管理组件公共状态的一个可预测状态的框架,集中管理组件的状态.核心在于`store`,它提供了`dispatch`,`getState`,`subscribe`方法,理解`Redux`的工作流程很重要

<div align="center">
   <img class="medium-zoom lazy"  loading="lazy"  src="../images/framework-article-imgs/advance-react-redux/02-react-redux.jpg" alt="todolist" />
</div>

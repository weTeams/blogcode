---
title: React 进阶(8)-如何在React中使用装饰器-即@修饰符
autoGroup-2: React进阶
---

## 如何在 React 中使用装饰器-即@修饰符

## 快速导航

<TOC />

## 前言

装饰器 decorator 是一种函数,是 Es6 的一个语法糖,是一种与类(class)相关的语法,用来注释或修改类和方法

以`@+函数名`形式展现,可以放在类和类方法的定义前面

那它在 React 中是如何使用的呢,这里以`create-react-app`脚手架搭建的项目为例

## 为什么要使用装饰器模式?

## 前提条件

在使用这种装饰器方式时,需要对`create-react-app`做一些配置,它默认是不支持装饰器模式的,需要对项目做一些配置

在项目根目录中终端下使用`npm run eject`,这条命令主要是将我们的配置项做一个反向输出,暴露出隐藏的 webpack 配置项,这样可以项目进行修改了的,注意它是不可逆的

### 方式 1-经过 eject 后在 package.json 中的 plugins 中配置

使用装饰器,需要使用`babel`来进行转换,用到的插件是`@babel/plugin-proposal-decorators`

当用`eject`将`webpack`一些配置弹射出来以后,会看到根目录下的`package.json`文件下新增了很多文件

在`babel`对象处进行插件的配置,将`@babel/plugin-proposal-decorators`添加到`plugins`后

```js
{
  "babel": {
    "presets": [
      "react-app"
    ],

    "plugins": [
        [
            "@babel/plugin-proposal-decorators",
            { "legacy": true }
        ]
    ]

  }
}
```

::: warning 注意
create-react-app 脚手架中已经安装了 `@babel/plugin-proposal-decorators` 插件，如果是自己配置的脚手架,则先要安装插件：`npm install @babel/plugin-proposal-decorators --save-dev`
:::

当然有一个比较便捷的写法就是使用安装`babel-plugin-transform-decorators-legacy`

```js
{
  "babel": {
    "presets": [
      "react-app"
    ],

  "plugins":[
    "transform-decorators-legacy"
   ]

  }
}
```

### 方式 2-安装 babel 插件在 babelrc 中配置

在使用这种装饰器方式时,需要对`create-react-app`做一些配置,它默认是不支持装饰器模式的,你需要对项目做一些配置

在`create-react-app`根目录中终端下使用`npm run eject`,这条命令主要是将我们的配置项做一个反向输出,暴露出隐藏的 webpack 配置项,这样可以项目进行修改了的,注意它是不可逆的

使用装饰器模式时:需要安装两个依赖:

```js
cnpm install -D babel-preset-stage-2
cnpm install -D babel-preset-react-native-stage-0
```

然后你需要在根目录下创建一个`.babelrc`文件,对`.babelrc`文件做一些配置

```js
{
  "presets": ["react-native-stage-0/decorator-support"]
}
```

经过这么配置后,就可以使用装饰器了的

```js
import React, { Component } from 'react';
import componentD from './componentD'; // 引入函数componentD高阶组件

@componentD // 直接用@符号+高阶组件componentD就可以了的
class componentF extends Component {
  render() {
    return <div>我是组件F</div>;
  }
}

export default componentF;
```

## 相关参考文档

- [装饰器-decorator](https://es6.ruanyifeng.com/#docs/decorator)

<!-- - [react 项目中使用装饰器 decorators 和 typeScript](https://blog.csdn.net/Charissa2017/article/details/105853351)
- [在 create-react-app 中启用装饰器语法](https://juejin.cn/post/6844903800801771534)
* [在你的React项目中使用Decorator 装饰器](https://alili.tech/archive/a280911b/) -->

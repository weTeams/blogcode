---
title: 微信小程序-页面间如何进行传递数据(通信)
autoGroup-2: 小程序技术
---

## 微信小程序-页面间如何进行传递数据(通信)

## 快速导航

<TOC />

## 前言

在小程序中组件与组件之间的通信是通过在引用组件处,在自定义组件上添加自定义属性实现的,子组件内部通过`properties`进行接收

更多关于组件与组件之间的通信可参考[小程序实现自定义组件以及自定义组件间的通信](./custom-components)这篇文章

那页面与页面之间又如何传递数据?

您将阅读完本文后,将收获到:

1. 页面间跳转携带参数(通过`url`的方式)传递数据
2. 如何返回上一级页面,并刷新页面呢
3. 使用全局`app`页面定义的变量实现数据的传递
4. 使用本地缓存
5. 使用`eventChannel`向被打开页面传送数据(高级用法)

## 页面间通过 `url` 方式传递数据

在小程序中当中,在父页面,通过`url`方式传递参数到子页面,是一种比较常见的做法

如下示例所示:应用场景

1. 点击列表页面,进入详情页
2. 改变详情页面的`navBar`中的`title`

<div align="center">
<img class="medium-zoom lazy" width="200" height="200" loading="lazy"  src ="../images/page-between-transdata/jiahaoruisen-min-code.jpg" alt="效果展示" />
<p>扫码即可体验</p>
</div>

### 父页面实例代码

:::: tabs type:border-card
::: tab wxml lazy

```html
<view>
  <view class="list-wrap">
    <block wx:for="{{listDatas}}" wx:key="index">
      <view bindtap="onListTap" data-list="{{item}}">
        <text>{{ item.list_text}}</text>
      </view>
    </block>
  </view>
</view>
```

:::
::: tab wxss lazy

```css
.list-wrap {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 15px 15px;
}

.list-wrap view {
  width: 30%;
  height: 300rpx;
  border: 1px solid #ccc;
  margin-bottom: 15px;
  text-align: center;
  line-height: 300rpx;
  font-size: 28rpx;
}
```

:::
::: tab javaScript lazy

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    listDatas: [
      {
        listId: '1',
        list_text: '建钢构混泥房',
        link_phone: '137-0113-4148',
        linker: '王经理',
      },

      {
        listId: '2',
        list_text: '建办公楼房',
        link_phone: '137-0113-4148',
        linker: '陈经理',
      },

      {
        listId: '3',
        list_text: '建冰场钢结构',
        link_phone: '137-0113-4148',
        linker: '张经理',
      },
    ],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {},

  onListTap(event) {
    const {
      listId,
      list_text,
      link_phone,
      linker,
    } = event.currentTarget.dataset.list;
    // 1. 传递参数-通过url的方式传递当前页面数据到子页面当中去,在子页面的onload的options中可以拿到
    wx.navigateTo({
      url: `/pages/listDetail/listDetail?id=${listId}&navtitle=${list_text}&phone=${link_phone}&link=${linker}`,
    });
  },
});
```

:::

::::

切换`tab`选项就可以查看对应的代码,在上面示例中,从一个页面跳转到另一个页面是使用`wx.navigateTo()`这个方法,如果想要将该页面的数据传递到子页面中,可以通过`url`拼接参数的方式进行传递的

### 子页面实例代码

:::: tabs type:border-card
::: tab wxml lazy

```html
<view>
  <view class="container">
    <view>项目:<text>{{id}}-{{text}}</text></view>
    <view>联系人: {{link}}</view>
    <view>联系电话: {{phoneNumber}}</view>
  </view>
</view>
```

:::
::: tab wxss lazy

```css
.container {
  padding: 20px 0 10px 30px;
}

.container view {
  line-height: 30px;
}
```

:::
::: tab javaScript lazy

```js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    // 页面中要渲染的数据,数据初始化
    id: null,
    text: '',
    phoneNumber: '',
    linker: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options);
    const { id, navtitle, phone, link } = options;
    this._setNavTitle(navtitle);
    this._getList(id, navtitle, phone, link);
  },

  // 设置navTitle
  _setNavTitle(navtitle) {
    wx.setNavigationBarTitle({
      title: navtitle,
    });
  },

  _getList(id, navtitle, phone, link) {
    // 改变页面中的数据,setData
    this.setData({
      text: navtitle,
      id,
      phoneNumber: phone,
      link,
    });
  },
});
```

:::
::::

当父页面通过`url`的方式传递数据给子页面时,在子页面中的生命周期`onLoad`函数中的`options`中可以拿到
想要更改什么数据,直接重新`setData`就可以了的

::: tip 注意

1. `url`的方式适合页面间跳转携带参数
2. 此方法有一定的局限性,不适宜传入复杂的数据

:::

## 相关文档

- [小程序-页面路由](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>

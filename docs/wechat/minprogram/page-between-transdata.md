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
2. 动态改变详情页面的`navBar`中的`title`

<div align="center">
<img class="medium-zoom lazy" width="200" height="200" loading="lazy"  src ="../images/page-between-transdata/jiahaoruisen-min-code.jpg" alt="效果展示" />
<p>点击图片扫码即可体验</p>
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

切换`tab`选项就可以查看对应的代码,在上面示例中,从一个页面跳转到另一个页面是使用`wx.navigateTo()`这个方法,如果想要将该页面的数据传递到子页面中,可以通过`url`拼接参数的方式进行传递,多个参数之间使用`&`符号拼接

上面示例代码中使用了`es6`的模板字符串,参数之间,也可以使用`+`拼接,个人觉得使用`+`真的很难受,不舒服,容易出错
:::: tabs type:border-card
::: tab 模板字符串拼参数 lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?id=${listId}&navtitle=${list_text}&phone=${link_phone}&link=${linker}`,
});
```

:::
::: tab +号拼接参数 lazy

```js
 wx.navigateTo({
      url: "/pages/listDetail/listDetail?id="+listId+"&navtitle="+list_text+"&phone="+link_phone+"&link="+link_phone+"&link="+linker,
    })
  }
```

:::
::: tab 两者比较 lazy
通过`es6`中的模板字符串,使用反引号,结合模板字符串`${变量}`的方式,要比使用`+`加号拼接参数要好理解得多

在单个参数情况下,或许使用模板字符串与加号没有影响,区别,但是当多个参数时,使用加号做拼接就会令人奔溃,很容易出错

甚至有可能在接收参数时,出现丢失的情况,这或许就是不小心使用加号前后空格或解析参数时,加号被转义导致的,很容易出现 bug
:::
::::

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

::: warning 注意

1. `url`的方式适合页面间跳转携带参数,多个参数之间使用`&`符号拼接
2. 此方法有一定的局限性,不适宜传入复杂的数据,例如:数组,对象
3. 适合参数比较少的情况

:::

<googleAd-googleInArticleAd />

### url 中有多个参数时传递

在小程序中,向跳转的目标`url`页面传递的参数有时候远不止一个,使用`wx.navigator`进行跳转,支持`/pages/xxx/xxx?param1=${param1}&param2=${param2}&param3=${param3}`的方式,并不支持类似`obj={key1:value1,key2: value2}`对象或者数组`list: [arr1, arr2, arr3 ..]`

**若`url`参数是数组情况**

:::: tabs type:border-card
::: tab 父页面(被跳转页面) lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?list=${[
    listId,
    list_text,
    link_phone,
    linker,
  ]}`,
});
```

:::
::: tab 子页面(跳转目标页) lazy

```js
onLoad: function (options) {
    console.log(options);
    const list = options.list.split(','); // 通过split分割成数组
    console.log(list);
  },
```

:::
::: tab 分析 lazy
当被跳转的 url 中的参数是数组时,那么在跳转的目标页面中的`onLoad`生命周期函数的`option`,将得到父页面中的字符串参数

通过`split`方法将字符串分割为数组,然后通过数组下标的方式拿到对应的参数

父页面中

```js
const name = 'itclanCoder';
const sex = 'boy';
wx.navigateTo({
  url: `/pages/listDetail/listDetail?data=${[name, sex]}`,
});
```

子页面中

```js
onLoad: function (options) {
    console.log(options);
    const data = options.data.split(','); // 通过split分割成数组
    console.log(data); // ["itclanCoder", "boy"]
  },
```

:::
::::

**若`url`参数是对象情况**

在`url`参数是对象时,并不会像数组一样,在目标页面中`onLoad`的`options`对象中是一个字符串,而却是一个对象

如下所示

```js
{
  obj: [object, object];
}
```

我们需要借助`JSON.stringify()`对传入的参数对象进行序列化
:::: tabs type:border-card
::: tab 父页面(对象参数序列化) lazy

```js
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify({
    id: listId,
    text: list_text,
    phone: link_phone,
    link: linker,
  })}`,
});
```

通常,我们把参数对象,定义成一个对象的,简化我们的代码,用一个变量对象临时存储的

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: listId,
  text: list_text,
  phone: link_phone,
  link: linker,
};
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify(params)}`,
});
```

:::
那么在子页面中,需要通过`JSON.parse()`对父页面中传递过来的参数进行反序列化,否则拿到的将是字符串对象,是无法通过对象.的方式访问属性
::: tab 子页面(对象参数反序列化) lazy

```js
onLoad: function (options) {
    console.log(options);
    const obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: "1", text: "建钢构混泥房", phone: "137-0113-4148", link: "王经理"}
  },

```

:::

::: tab 分析 lazy
在父页面中若跳转目标的 url 参数是对象的情况下,需要先将参数通过`JSON.stringify()`序列化才可以

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: 22,
  name: '川川',
  sex: 'boy',
};
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${JSON.stringify(params)}`,
});
```

那么在子页面(目标页面中)的`onLoad`的`options`中

```js
onLoad: function (options) {
    console.log(options);
    const obj = JSON.parse(options.obj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: 22, name: "川川",sex: "boy"}
},
```

:::
::::

### 可能会遇到的问题

当传递的对象数据中含有特殊字符串时，在下个页面使用`JSON.parse()`还原为对象时会报错
也就是当`url传参 参数值过长`,在子页面接收时,会出现问题,存在丢失情况

具体解决办法

在上个页面(被跳转页面)将对象转化为字符串后(`JSON.stringify()`),然后使用`encodeURIComponent`进行编码，然后在下个页面先用`decodeURIComponent`进行解码,最终在还原为对象

:::: tab type:border-card
::: tab 父(上个)页面编码 lazy

```js
const params = {
  // 参数放到外面,让代码更加清晰,可读,可维护性更高
  id: 22,
  name: '川川',
  sex: 'boy',
};
const param = encodeURIComponent(JSON.stringify(params)); // 通过encodeURIComponent编码
wx.navigateTo({
  url: `/pages/listDetail/listDetail?obj=${param}`,
});
```

:::
::: tab 子页面解码 lazy

```js
onLoad: function (options) {
    console.log(options);
    const tempObj = decodeURIComponent(options.obj)
    const obj = JSON.parse(tempObj); // 将字符串对象转化为真正的对象
    console.log(obj); // {id: 22, name: "川川",sex: "boy"}
},
```

:::

::::

::: tip 注意

1. 当父页面传递的`url`参数为对象时，在子页面是无法直接获取的，在父页面中,必须先使用`JSON.stringify()`转换为字符串
   然后在下个页面使用`JSON.parse()`还原为对象,这样在子页面中便可以通过对象的方式拿到

2. 当父页面传递的`url`对象数据中含有特殊字符串时，在子页面使用 `JSON.parse()`还原为对象时会报错。需要在上个(父)页面将对象转化为字符串后(`JSON.stringify()`),在使用 `encodeURIComponent` 进行编码，然后在下个(子)页面先用 `decodeURIComponent` 进行解码在还原(`JSON.parse()`)为对象。

:::

## 如何返回上一级页面-并刷新页面

在使用`wx.navigateTo()`API 进行跳转时,在子页面中可以通过`wx.navigateBack()`返回上一级页面的

这个场景在日常开发中,就有不少的

例如:写完微博,发完微博成功后,自动要返回到首页,申请退款时,跳转到申清退款页面等等的

```js
const pages = getCurrentPages(); // 可以获取当前页面栈,上一个页面以及当前页面栈信息
console.log(pages); // 是一个数组，记录了上一个页面与当前页面信息
// 取到上一个页面
const prevPage = pages[pages.length - 2]; // 获取第0个页面,也就是上个页面
console.log(prevPage);
prevPage.onLoad(); // 可以调用上一页面的方法
prevPage.setData({
  name: 'itclanCoder',
});
```

这个方法非常厉害,而且很有用,当你通过`wx.navigateTo()`,一层一层跳转到子页面时,使用`getCurrentPages`方法就可以找到上级,上上级的页面栈信息

它是通过获取到其他页面的原型对象,然后通过小程序原型下的`setData`方法,对当前对象管理的数据`data`进行修改

这个方法`getCurrentPage`方法可以操作页面堆栈页面的数据和方法,可以做到对子(后一)页面对父(上一)页面的数据管理

::: warning 提示

`getCurrentPages()`用于获取当前页面栈,数组中第一个元素为首页，最后一个元素为当前页面

1. 不要尝试修改页面栈，会导致路由以及页面状态错误(不要依赖这个方法)
2. 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成

:::

## 使用全局`app`页面定义的变量实现数据的传递

在小程序当中,当有多个页面用到一些公共变量对象参数时,例如:小程序的`openId`,一些公用的状态,可以放到全局`app`中

:::: tabs type:border-card
::: tab 全局页面 app.js lazy

```js
//app.js
App({
  onLaunch: function() {
    // 定义的全局变量,如token,某些状态等,放在globalData下
    this.globalData = {
      token: 'token',
      url: 'http://coder.itclan.cn/',
      userInfo: 'itclanCoder',
    };
  },
});
```

:::

::: tab 使用页面 javaScript lazy

```js
const app = getApp(); // 在另一页面想要使用全局变量处,调用getApp()
Page({
  // 页面初始化的数据
  data: {
    token: '',
    url: '',
    userInfo: '',
  },
  // 生命周期函数
  onLoad: function(options) {},

  onGetGlobal() {
    // 获取全局变量
    const { token, url, userInfo } = app.globalData;
    console.log(token, url, userInfo);
    this.setData({
      token,
      url,
      userInfo,
    });
  },
});
```

:::

::: tab wxml lazy

```html
<view>
  <view class="globalData">
    <view class="getGloablBtn btn" bindtap="onGetGlobal">获取全局变量</view>
    <view class="changeGloablBtn btn" bindtap="onChangeGlobal"
      >修改全局变量</view
    >
  </view>
  <view>{{token}}</view>
  <view>{{url}}</view>
  <view>{{userInfo}}</view>
</view>
```

:::

::: tab wxss lazy

```css
.globalData {
  display: flex;
  justify-content: start;
  margin: 15px 0 0 0;
}

.getGloablBtn {
  background: rgb(89, 196, 119);
  margin-right: 15px;
}

.changeGloablBtn {
  background: rgb(160, 10, 7);
}

.btn {
  width: 120px;
  height: 30px;
  line-height: 30px;
  color: #fff;
  text-align: center;
}
```

:::

::: tab 分析 lazy

全局定义的变量,一些状态,可以挂载在全局页面 `app.js` 的`globalData`中,在使用全局变量页面处

1. 需要调用`getApp()`函数
2. 通过`getApp().globalData.a`可以拿到全局对象下定义的变量对象
3. 若要修改全局变量对象直接赋值即可`getApp().globalData.a = "bb"`;

:::
::::

### 全局定义变量注意事项

1. `App()`必须在`app.js`中注册,且不能注册多个
2. 不要在定义`App()`内的函数调用`getApp()`,使用`this`就可以拿到`App`下的实例
3. 不要在 `App.onLaunch` 的时候调用 `getCurrentPages()`，此时 `page` 还没有生成
4. 通过`getApp()`获取到全局页面的实例后,就不要私自调用生命周期函数了的

<googleAd-googleMediumAd />

## 使用本地缓存

## 相关文档

- [小程序-页面路由](https://developers.weixin.qq.com/miniprogram/dev/framework/app-service/route.html)

<footer-FooterLink :isShareLink="true" :isDaShang="true" />

<div align="center">
<footer-ArticleAdvertiSpace   width="600" height="140" />
</div>

<googleAd-googleBottomAd />

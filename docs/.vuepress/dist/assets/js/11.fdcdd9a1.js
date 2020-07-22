(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{781:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity1.f6aea627.png"},782:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity2.e1b71ba0.png"},783:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity3.a0a15ff4.png"},784:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity4.3bef2bad.png"},785:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity5.e9fae8ac.gif"},786:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity6.97aa615d.png"},787:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity7.33fc23ec.png"},788:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity8.3d082d04.png"},789:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity9.97550e64.gif"},790:function(s,n,e){s.exports=e.p+"assets/img/content-sercurity10.abf39203.gif"},970:function(s,n,e){"use strict";e.r(n);var a=e(12),t=Object(a.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"小程序-云开发-如何对敏感词进行过滤即内容安全的检测-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#小程序-云开发-如何对敏感词进行过滤即内容安全的检测-上"}},[s._v("#")]),s._v(" 小程序-云开发-如何对敏感词进行过滤即内容安全的检测(上)")]),s._v(" "),a("h2",{attrs:{id:"快速导航"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#快速导航"}},[s._v("#")]),s._v(" 快速导航")]),s._v(" "),a("TOC"),s._v(" "),a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" 前言")]),s._v(" "),a("p",[s._v("内容安全检测，是每一个小程序主都面临的“头疼”问题，轻则短暂性不可访问，重则永久封号，甚至关小黑屋。本文将为您详细说明，如何在小程序中对一段文本进行合法内容检测，以判断是否含有违法违规内容。\n本文重点为你讲述：")]),s._v(" "),a("ul",[a("li",[s._v("内容安全检测常见应用场景及解决办法")]),s._v(" "),a("li",[s._v("学会使用小程序·云开发的云函数+结合"),a("code",[s._v("request-promise")]),s._v("第三方库实现内容请求校验")]),s._v(" "),a("li",[s._v("掌握如何在小程序端请求云函数（有别于传统的"),a("code",[s._v("wx.request")]),s._v("的方式(类似 AJax)）")]),s._v(" "),a("li",[s._v("在云开发的云函数端,利用第三方 https 请求库(request,request-promise),获取 Access_token,以及向微信官方提供的内容检测接口发请求进行校验")]),s._v(" "),a("li",[s._v("云函数端与小程序端错误码的处理")])]),s._v(" "),a("h2",{attrs:{id:"背景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[s._v("#")]),s._v(" 背景")]),s._v(" "),a("p",[s._v("无论是小程序还是自行开发的一些类似社交,带有用户自行产生内容的软件应用,例如:即时通讯,社群,论坛,音视频直播等,对于接入内容安全的检测是非常有必要的。")]),s._v(" "),a("p",[s._v("对于小程序而言,这一点在审核上是非常严格的,净化言行,做一个知法守法的人很重要...")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(781),alt:"小程序-云开发"}})]),s._v("\n接入内容安全检测,规避输入一些违法违规低俗等内容,避免辛辛苦苦开发出来的应用。\n"),a("p",[s._v("被恶意上传反动言论或上传一些违规内容(文字/图片/视频等),导致小程序或应用被下架,或遭永久禁封,或个人及公司被公安机关打电话,约喝茶等,这样的话,就得不偿失了的")]),s._v(" "),a("h2",{attrs:{id:"应用场景"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#应用场景"}},[s._v("#")]),s._v(" 应用场景")]),s._v(" "),a("ul",[a("li",[s._v("检测小程序用户个人文字资料是否违规")]),s._v(" "),a("li",[s._v("针对特点词汇（如过于商业以及营销之类的词）可以进行过滤或禁止输入")]),s._v(" "),a("li",[s._v("在内容发布之前自动检测用户发表的信息（包括评论、留言等）是否违规")])]),s._v(" "),a("h2",{attrs:{id:"解决办法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[s._v("#")]),s._v(" 解决办法")]),s._v(" "),a("p",[s._v("围绕如何处理内容安全检测问题，一般有 3 种方法：")]),s._v(" "),a("ul",[a("li",[a("p",[a("strong",[s._v("方案 1")]),s._v(":引入第三方接口对内容进行校验(例如:百度 AI 内容审核平台,网易云盾等)")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("优势")]),s._v(": 前端同学只需按照官方提供的第三方接口文档,进行校验即可,无需后台介入,功能强大,覆盖范围广")]),s._v(" "),a("li",[a("strong",[s._v("劣势")]),s._v(": 接口调用的频次有限制,收费")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("方案 2")]),s._v(": 公司后台小伙伴自行开发文本,图片,音视频等内容审核接口")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("优势")]),s._v(": 后台小伙伴自己造轮子,根据自己的业务需求以及用户属性,自定义内容审核机制")]),s._v(" "),a("li",[a("strong",[s._v("劣势")]),s._v(": 开发周期长,成本大,难以覆盖全面")])])]),s._v(" "),a("li",[a("p",[a("strong",[s._v("方案 3")]),s._v(": 小程序服务端提供的 API 进行校验")]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("优势")]),s._v(": 简单,高效")]),s._v(" "),a("li",[a("strong",[s._v("劣势")]),s._v(": 想不出来,因为相比前两种方案,对于不依赖后端接口的开发者来说,简直是雪中送炭")])])])]),s._v(" "),a("p",[a("strong",[s._v("在微信小程序生态下，官方提供了 2 种路径帮助用户解决内容检测问题，即")])]),s._v(" "),a("ul",[a("li",[s._v("使用服务器开发模式，通过 HTTPS 调用")]),s._v(" "),a("li",[s._v("使用小程序·云开发，通过云函数或云调用来实现。")])]),s._v(" "),a("p",[s._v("服务器开发模式，相信大家都相对比较熟悉，在此就不再赘述。接下来为大家重点介绍，如何通过小程序·云开发的云函数实现内容安全检测。")]),s._v(" "),a("h2",{attrs:{id:"通过云开发的云函数-request-promise-第三方库实现内容请求校验"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#通过云开发的云函数-request-promise-第三方库实现内容请求校验"}},[s._v("#")]),s._v(" 通过云开发的云函数+request-promise 第三方库实现内容请求校验")]),s._v(" "),a("h3",{attrs:{id:"step-1-在小程序端先布局：完成静态页面"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-1-在小程序端先布局：完成静态页面"}},[s._v("#")]),s._v(" Step 1: 在小程序端先布局：完成静态页面")]),s._v(" "),a("p",[a("code",[s._v("pages")]),s._v("文件夹下的文件都是属于小程序前端代码,每个文件夹目录代表的就是一个模块,一个页面")]),s._v(" "),a("p",[s._v("小程序前端 wxml 代码示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('<view class="container">\n  <textarea class="content" placeholder="写点文字..." bindinput="onInput" auto-focus bindfocus="onFocus" bindblur="onBlur">\n  </textarea>\n</view>\n\n<view class="footer">\n  <button class="send-btn" size="default" bind:tap="send">发布</button>\n</view>\n\n')])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br")])]),a("p",[s._v("小程序前端 wxss 代码示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/* pages/msgSecCheck/msgSecCheck.wxss */\n.container {\n  padding: 20rpx;\n}\n\n.content {\n  width: 100%;\n  height: 360rpx;\n  box-sizing: border-box;\n  font-size: 32rpx;\n  border: 1px solid #ccc;\n}\n\n.footer {\n  width: 100%;\n  height: 80rpx;\n  line-height: 80rpx;\n  position: fixed;\n  bottom: 0;\n  box-sizing: border-box;\n  background: #34bfa3;\n}\n\n.send-btn {\n  width: 100% !important;\n  color: #fff;\n  font-size: 32rpx;\n}\n\nbutton {\n  width: 100%;\n  background: #34bfa3;\n  border-radius: 0rpx;\n}\n\nbutton::after {\n  border-radius: 0rpx !important;\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br")])]),a("p",[s._v("经过 wxml 与 wxss 的编写后,UI 最终长成这样")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(782),alt:"小程序-云开发"}})]),s._v(" "),a("h3",{attrs:{id:"step-2-完成小程序端业务逻辑的处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-2-完成小程序端业务逻辑的处理"}},[s._v("#")]),s._v(" Step 2: 完成小程序端业务逻辑的处理")]),s._v(" "),a("p",[s._v("小程序端逻辑 JS 代码示例")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// pages/msgSecCheck/msgSecCheck.js\nPage({\n\n  /**\n   * 页面的初始数据\n   */\n  data: {\n    textareaVal: ''   // 页面中需要显示的数据,初始化定义在data下面\n  },\n\n  /**\n   * 生命周期函数--监听页面加载\n   */\n  onLoad: function (options) {\n\n  },\n  // 监听表单时,数据有变化时\n  onInput(event) {\n    let textVal = event.detail.value;\n    this.setData({\n      textareaVal: textVal\n    })\n    \n  },\n\n  // 聚焦焦点时\n  onFocus() {\n    console.log('聚焦焦点时');\n  },\n\n  // 失去焦点时\n  onBlur(event) {\n    console.log(\"失去焦点时\");\n    // 前端可进行手动的弱校验,也可以在失去焦点时发送请求进行文本的校验,但是每次失去焦点就请求一次,这样是消耗云资源的,在发布时候与失去焦点做校验两者都可以\n\n\n  },\n\n  // 发布\n  send() {\n    console.log(\"触发发布按钮\")\n    wx.cloud.callFunction({ // 请求msgSecCheck1云函数\n      name: 'msgSecCheck1',\n      data: {\n        content: this.data.textareaVal // 需要向云函数msgSecCheck1传入的值\n      }\n\n    }).then(res => { // 成功时的响应返回结果\n      console.log(res);\n    }).catch(err => { // 失败时,返回的结果\n      console.error(err);\n    })\n    \n  }\n\n})\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br")])]),a("h3",{attrs:{id:"step-3-：服务端逻辑处理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-3-：服务端逻辑处理"}},[s._v("#")]),s._v(" Step 3 ：服务端逻辑处理")]),s._v(" "),a("p",[s._v("在小程序云函数端创建云函数"),a("code",[s._v("msgSecCheck1")]),s._v(",这个名字你可以自定义,与小程序前端请求的名字保持一致就可以了的")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(783),alt:"小程序-云开发"}})]),s._v(" "),a("p",[s._v("选中云函数,右键并打开命令行终端安装"),a("code",[s._v("request")]),s._v(","),a("code",[s._v("request-promise")]),s._v("，因为"),a("code",[s._v("request-promise")]),s._v("依赖于"),a("code",[s._v("request")]),s._v(",两个都要安装,最后一键上传部署就可以了的")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("npm install request\nnpm install request-promise\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("p",[s._v("如果遇到在小程序端请求云函数时,遇到类似下面的错误,找不到什么 xxx 模块之类的 先看错误码,然后在官方文档中找到该错误码代表的含义")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(784),alt:"小程序-云开发"}})]),s._v(" "),a("p",[s._v("一看错误,没有找到模块,在云函数的目录下的 package.json 中查看是否有安装错误中提示的包的,要是没有的话,就安装一下就可以了的,同时记得每次更改后都要上传部署一下,也可以选择云函数中文件的增量上传")]),s._v(" "),a("p",[a("strong",[s._v("接下来是将是本文的重点内容")])]),s._v(" "),a("h3",{attrs:{id:"step4-通过云函数-request-promise-实现内容安全检测"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step4-通过云函数-request-promise-实现内容安全检测"}},[s._v("#")]),s._v(" Step4: 通过云函数+request-promise 实现内容安全检测")]),s._v(" "),a("p",[s._v("对于小程序开发,其实与 web 端开发也是类似,给元素绑定事件,然后获取元素,只是小程序端没有 DOM,BOM 的那一套东西,它是数据驱动视图的,吸收了 Angular,Vue,React 的各个框架的优点,形成了自己的一套规范。")]),s._v(" "),a("p",[s._v("如果有这方面开发经验的小伙伴来说,平缓过度到小程序开发当中来,你会发现总会有惊人的相似,用的语言都是 JavaScript,但是与 web 开发还是多少有很多差异的,这里就不拓展了。")]),s._v(" "),a("p",[s._v("废话不多说,直接上代码")]),s._v(" "),a("p",[s._v("小程序前端逻辑代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 点击发送按钮,对输入的文本内容进行校验\n send() {\n    wx.cloud.callFunction({\n      name: 'msgSecCheck1', // 云函数的名称\n      data: { // 需要向云函数传递过去的数据\n        content: this.data.textareaVal // 具体要检测的内容\n      }\n    }).then(res => { // 成功时,做什么事情\n      console.log(res);\n      // 检测到文本成功时,做一些业务\n\n    }).catch(err => { // 失败时,做什么事情\n      // 失败时,也就是违规做一些用户提示,或者禁止下一步操作等之类的业务逻辑操作\n\n      console.error(err);\n    })\n  }\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])]),a("p",[s._v("上面的代码还可以在优化一下,就是将请求云函数的代码封装成一个函数。")]),s._v(" "),a("p",[s._v("如下所示,不封装也是没事的,只是我习惯性封装一下,如果其他地方也用到该云函数,那么直接调用，避免写重复的代码。")]),s._v(" "),a("p",[s._v("下面是将请求云函数的部分核心代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("// 发布\n  send() {\n    // 请求msgSecCheck1云函数,对文本内容进行校验\n    this._requestCloudMsgCheck();\n  },\n\n  _requestCloudMsgCheck() {\n    let textareaVal = this.data.textareaVal;\n    wx.cloud.callFunction({\n      name: 'msgSecCheck1',\n      data: {\n        content: textareaVal // 这里可以使用官方文档测试用例,特3456书yuuo莞6543李zxcz蒜7782法fgnv级\n      }\n    }).then(res => {\n      console.log(res);\n      // 检测到文本成功时,做一些业务\n    }).catch(err => {\n      // 失败时,也就是违规做一些用户提示,或者禁止下一步操作等之类的业务逻辑操作\n      console.error(err);\n    })\n  }\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br")])]),a("p",[s._v("至于是在失去焦点事件时发送请求还是在点击发送按钮时发送请求,两种方式都可以。\n您也可以自定义文本校验,而我个人觉得在小程序端,失去焦点时,可以自定义做一些常规敏感词的弱校验,而在点击发送按钮时,做强校验")]),s._v(" "),a("p",[s._v("如果是放在失去焦点时就立马请求,这样请求次数会增多,而放在点击发送按钮时进行校验,一定程度上可以减少小程序端频繁请求。")]),s._v(" "),a("p",[s._v("接下来就是处理云函数端,使用"),a("code",[s._v("request-promise")]),s._v("请求请求微信内容安全接口的示例代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/*\n *  Description: 利用第三方库request-promise请求微信内容安全接口\n *\n * 相关文档链接:\n * 微信文本内容安全接口文档https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html\n * access_token获取调用凭证文档\nhttps://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html\n *\n * request-promise使用文档: https://github.com/request/request-promise\n *\n */\n\nconst APPID = \"wx21baa58c6180c2eb\"; // 注意是你自己小程序的appid\nconst APPSECRET = \"\"; // 你自己小程序的appsecret\n// 安全校验接口\nconst msgCheckURL = `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=`;\n// 向下面的这个地止发送请求,携带appid和appsecret参数,获取token认证\nconst tokenURL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`\n// 云函数入口文件\nconst cloud = require('wx-server-sdk')\n\ncloud.init()\n\n// 引入request-promise\nconst rp = require('request-promise');\n\n// 云函数入口函数\nexports.main = async(event, context) => {\n  try {\n    let tokenResponse = await rp(tokenURL);\n    // 获取token值,因为返回的结果是字符串,需要用JSON.parse转化为json对象\n    let getAccessToken = JSON.parse(tokenResponse).access_token;\n    // 请求微信内容安全接口,post请求,返回最终的校验结果\n    let checkResponse = await rp({\n      method: 'POST',\n      url: `${msgCheckURL}${getAccessToken}`,\n      body: {\n        content: event.content // 这里的event.content是小程序端传过来的值,content是要向内容接口校验的内容\n      },\n      json: true\n    })\n    return checkResponse;\n  } catch (err) {\n      console.error(err);\n  }\n}\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br")])]),a("p",[s._v("当你在小程序端输入文本,发送请求时,查看控制台下的结果时,功能是没有问题的。")]),s._v(" "),a("p",[s._v("您可以根据官方文档中提供的测试用例,将下方的测试用例文本,进行测试,看具体的返回结果的。")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("特3456书yuuo莞6543李zxcz蒜7782法fgnv级\n完2347全dfji试3726测asad感3847知qwez到\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br")])]),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(785),alt:"小程序-云开发"}}),s._v(" "),a("img",{staticClass:"medium-zoom",attrs:{src:e(786),alt:"小程序-云开发"}}),s._v(" "),a("img",{staticClass:"medium-zoom",attrs:{src:e(787),alt:"小程序-云开发"}})]),s._v("\n云函数请求成功,看看错误信息的反馈,对于熟悉该错误码的人清楚该文本违规了,但是反馈不是很明显,即使当下自己很清楚,然而,在过几个月在回来看代码,你或许都不知道是啥意思。\n"),a("h3",{attrs:{id:"step-5-：错误码的正确处理方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#step-5-：错误码的正确处理方式"}},[s._v("#")]),s._v(" Step 5 ：错误码的正确处理方式")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(788),alt:"小程序-云开发"}})]),s._v(" "),a("p",[s._v("对于处理错误码,返回具体的合适信息,对于调试代码,排查问题,也是非常重要  。\n这些错误码具体的含义,在官方文档里都有对应的解释,不用去记,去查文档就行。")]),s._v(" "),a("p",[s._v("在面试中,有很多面试官喜欢问 http 相关状态码的问题,状态码有很多,也真的记不住,但是常见的错误 http 状态码还是要知道的,我觉得,具体知道怎么处理,怎么查文档就可以了。")]),s._v(" "),a("p",[s._v("真正考验背后目的是,对于根据后端返回的状态码,判断接口哪里出了问题,定位是前端问题还是后端问题,这是一个非常常见的问题。")]),s._v(" "),a("p",[s._v("如果你说你不知道,没有处理过,对于候选人,那肯定是没有信服力的,无论是成功状态还是失败状态,都是应该有对应的用户提示。")]),s._v(" "),a("h2",{attrs:{id:"完整文本安全校验示例代码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#完整文本安全校验示例代码"}},[s._v("#")]),s._v(" 完整文本安全校验示例代码")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("/*\n *\n * 相关文档链接:\n * 微信文本内容安全接口文档https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html\n * access_token获取调用凭证文档\nhttps://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/access-token/auth.getAccessToken.html\n *\n * request-promise使用文档: https://github.com/request/request-promise\n *\n */\n\nconst APPID = \"wx21baa58c6180c2eb\";\nconst APPSECRET = \"\";\n\nconst msgCheckURL = `https://api.weixin.qq.com/wxa/msg_sec_check?access_token=`;\n// 向下面的这个地止发送请求,携带appid和appsecret参数,获取token认证\nconst tokenURL = `https://api.weixin.qq.com/cgi-bin/token?grant_type=client_credential&appid=${APPID}&secret=${APPSECRET}`\n// 云函数入口文件\nconst cloud = require('wx-server-sdk')\n\ncloud.init()\n\n// 引入request-promise\nconst rp = require('request-promise');\n\n// 云函数入口函数\nexports.main = async(event, context) => {\n  try {\n    let tokenResponse = await rp(tokenURL);\n    // 获取token值,因为返回的结果是字符串,需要用JSON.parse转化为json对象\n    let getAccessToken = JSON.parse(tokenResponse).access_token;\n    // 请求微信内容安全接口,post请求,返回最终的校验结果\n    let checkResponse = await rp({\n      method: 'POST',\n      url: `${msgCheckURL}${getAccessToken}`,\n      body: {\n        content: event.content // 这里的event.content是小程序端传过来的值,content是要向内容接口校验的内容\n      },\n      json: true\n    })\n\n    // 有必要根据错误码,确定内容是否违规\n    if (checkResponse.errcode == 87014) {\n      return {\n        code: 500,\n        msg: \"内容含有违法违规内容\",\n        data: checkResponse\n      }\n    } else {\n      return {\n        code: 200,\n        msg: \"内容OK\",\n        data: checkResponse\n      }\n    }\n  } catch (err) {\n    if (err.errcode == 87014) {\n      return {\n        code: 500,\n        msg: '内容含有违法违规内容',\n        data: err\n      }\n    } else {\n      return {\n        code: 502,\n        msg: '调用msgCheckURL接口异常',\n        data: err\n      }\n    }\n  }\n}\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br"),a("span",{staticClass:"line-number"},[s._v("25")]),a("br"),a("span",{staticClass:"line-number"},[s._v("26")]),a("br"),a("span",{staticClass:"line-number"},[s._v("27")]),a("br"),a("span",{staticClass:"line-number"},[s._v("28")]),a("br"),a("span",{staticClass:"line-number"},[s._v("29")]),a("br"),a("span",{staticClass:"line-number"},[s._v("30")]),a("br"),a("span",{staticClass:"line-number"},[s._v("31")]),a("br"),a("span",{staticClass:"line-number"},[s._v("32")]),a("br"),a("span",{staticClass:"line-number"},[s._v("33")]),a("br"),a("span",{staticClass:"line-number"},[s._v("34")]),a("br"),a("span",{staticClass:"line-number"},[s._v("35")]),a("br"),a("span",{staticClass:"line-number"},[s._v("36")]),a("br"),a("span",{staticClass:"line-number"},[s._v("37")]),a("br"),a("span",{staticClass:"line-number"},[s._v("38")]),a("br"),a("span",{staticClass:"line-number"},[s._v("39")]),a("br"),a("span",{staticClass:"line-number"},[s._v("40")]),a("br"),a("span",{staticClass:"line-number"},[s._v("41")]),a("br"),a("span",{staticClass:"line-number"},[s._v("42")]),a("br"),a("span",{staticClass:"line-number"},[s._v("43")]),a("br"),a("span",{staticClass:"line-number"},[s._v("44")]),a("br"),a("span",{staticClass:"line-number"},[s._v("45")]),a("br"),a("span",{staticClass:"line-number"},[s._v("46")]),a("br"),a("span",{staticClass:"line-number"},[s._v("47")]),a("br"),a("span",{staticClass:"line-number"},[s._v("48")]),a("br"),a("span",{staticClass:"line-number"},[s._v("49")]),a("br"),a("span",{staticClass:"line-number"},[s._v("50")]),a("br"),a("span",{staticClass:"line-number"},[s._v("51")]),a("br"),a("span",{staticClass:"line-number"},[s._v("52")]),a("br"),a("span",{staticClass:"line-number"},[s._v("53")]),a("br"),a("span",{staticClass:"line-number"},[s._v("54")]),a("br"),a("span",{staticClass:"line-number"},[s._v("55")]),a("br"),a("span",{staticClass:"line-number"},[s._v("56")]),a("br"),a("span",{staticClass:"line-number"},[s._v("57")]),a("br"),a("span",{staticClass:"line-number"},[s._v("58")]),a("br"),a("span",{staticClass:"line-number"},[s._v("59")]),a("br"),a("span",{staticClass:"line-number"},[s._v("60")]),a("br"),a("span",{staticClass:"line-number"},[s._v("61")]),a("br"),a("span",{staticClass:"line-number"},[s._v("62")]),a("br"),a("span",{staticClass:"line-number"},[s._v("63")]),a("br"),a("span",{staticClass:"line-number"},[s._v("64")]),a("br"),a("span",{staticClass:"line-number"},[s._v("65")]),a("br"),a("span",{staticClass:"line-number"},[s._v("66")]),a("br"),a("span",{staticClass:"line-number"},[s._v("67")]),a("br"),a("span",{staticClass:"line-number"},[s._v("68")]),a("br"),a("span",{staticClass:"line-number"},[s._v("69")]),a("br"),a("span",{staticClass:"line-number"},[s._v("70")]),a("br"),a("span",{staticClass:"line-number"},[s._v("71")]),a("br")])]),a("p",[s._v("在云函数端,经过添加错误码的判断之后,在来看看小程序端发送的请求,返回的结果。")]),s._v(" "),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(789),alt:"小程序-云开发"}})]),s._v(" "),a("p",[s._v("至此,我们在小程序端可以根据这个返回的错误码或成功码,进行一些业务逻辑处理的,比如给一些用户提示,在数据插入数据库之前就做一些判断操作,只有内容合规时,才插入数据库,进入下一步的业务逻辑处理")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("_requestCloudMsgCheck() {\n    let textareaVal = this.data.textareaVal;\n    wx.cloud.callFunction({\n      name: 'msgSecCheck1',\n      data: {\n        content: textareaVal\n      }\n    }).then(res => {\n      console.log(res);\n      const errcode = res.result.data.errcode;\n      // 检测到文本错误时,做一些业务\n      if (87014 === errcode) {\n         wx.showToast({ // 当内容违规时,做一些用户提示\n           title: '您输入的文本内容含有敏感内容,请重新输入',\n         })\n      }else {\n         // 成功时做其他业务操作\n      }\n    }).catch(err => {\n      // 失败时,也就是违规做一些用户提示,或者禁止下一步操作等之类的业务逻辑操作\n      console.error(err);\n    })\n  }\n\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br"),a("span",{staticClass:"line-number"},[s._v("19")]),a("br"),a("span",{staticClass:"line-number"},[s._v("20")]),a("br"),a("span",{staticClass:"line-number"},[s._v("21")]),a("br"),a("span",{staticClass:"line-number"},[s._v("22")]),a("br"),a("span",{staticClass:"line-number"},[s._v("23")]),a("br"),a("span",{staticClass:"line-number"},[s._v("24")]),a("br")])]),a("div",{attrs:{align:"center"}},[a("img",{staticClass:"medium-zoom",attrs:{src:e(790),alt:"小程序-云开发"}})]),s._v(" "),a("p",[s._v("注意在云函数(后)端处理错误码与小程序端都是要进行处理的,两者不要混淆了的,小程序端最终的一些业务逻辑判断,是根据后端接口返回的状态,最终决定要做什么操作的。\n至此,通过 request-promise 库就完成了文本内容校验的问题。")]),s._v(" "),a("p",[s._v("这个"),a("code",[s._v("request")]),s._v(","),a("code",[s._v("request-promise")]),s._v("库非常实用,功能也非常强大,类似这种库,常见什么 got,axios 等之类的,都是支持 promise 风格的 处理方式大同小异,大家可以去 npm 或 github 上阅读相关使用文档的")]),s._v(" "),a("h2",{attrs:{id:"结语"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#结语"}},[s._v("#")]),s._v(" 结语")]),s._v(" "),a("p",[s._v("在小程序中有多种解决方案,推荐使用小程序端请求云开发云函数的方式,无论是不使用云函数方式,自己有后端服务,获取 access_token 都应该是从后端返回给前端的。")]),s._v(" "),a("p",[s._v("而小程序的秘钥 AppSecret 是不应该放在小程序端的,那样不安全的,无论是服务器开发模式还是小程序·云开发模式,都绕不过后台请求微信提供的内容安全接口,然后在返回给小程序端  。")]),s._v(" "),a("p",[s._v("其实在小程序·云开发中,还提供了一种更简便的方法,那就是云调用,它是小程序·云开发提供的在云函数中调用微信开放接口的能力,只需简单的进行配置一下就可以了。")]),s._v(" "),a("p",[s._v("限于篇幅所致,放在下一节介绍")]),s._v(" "),a("h2",{attrs:{id:"相关链接"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#相关链接"}},[s._v("#")]),s._v(" 相关链接")]),s._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/sec-check/security.msgSecCheck.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("微信内容安全"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://developers.weixin.qq.com/miniprogram/dev/wxcloud/basis/capabilities.html#%E4%BA%91%E5%87%BD%E6%95%B0",target:"_blank",rel:"noopener noreferrer"}},[s._v("云调用"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://ai.baidu.com/tech/textcensoring",target:"_blank",rel:"noopener noreferrer"}},[s._v("百度文本审核"),a("OutboundLink")],1)]),s._v(" "),a("li",[a("a",{attrs:{href:"https://dun.163.com/product/text-detection",target:"_blank",rel:"noopener noreferrer"}},[s._v("网易云盾"),a("OutboundLink")],1)])]),s._v(" "),a("footer-FooterLink",{attrs:{isShareLink:!0,isDaShang:!0}})],1)}),[],!1,null,null,null);n.default=t.exports}}]);
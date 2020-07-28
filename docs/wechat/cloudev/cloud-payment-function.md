---
title: 小程序-云开发-实现微信云支付功能
---

## 快速导航

<TOC />

## 前言

对于支付下单在小程序当中是一个非常重要的功能,在未接入云支付之前,想要实现一个支付下单的功能,借助微信官方提供的`wx.requestPayment()`这个接口,发起微信支付

需要获取小程序的`openId`,然后调起数据签名(`timeStamp`,`nonceStr`,`package`,`signType`,`paySign`),这些字段参数处理起来仍是有些麻烦的

但接入了云支付之后,实现一个支付功能,就相当简单容易了,免签名,直接获取小程序`wx.requestPayment`的所需参数

开发者无需关心证书、签名、也无需依赖第三方模块，免去了泄漏证书，支付等敏感信息的风险；还支持云函数作为微信支付进行支付和退款的回调地址，不再需要定时轮询，更加高效

您将在本文中学习到:

- 随机生成商品订单号,订单号不能重复
- 实现云支付的功能

## 前提条件

**资质:** 小程序主体开通微信支付(**微信支付不支持个人小程序,需要企业账户才可以**)的能力,并且已绑定商户号(**绑定开通商户号**)的小程序

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/01-paynumber.png" alt="小程序-云开发" />
  <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/02-payment.png" alt="小程序-云开发" />
</div>

## 开通

开通微信支付云调用,在云控制台 -> 设置 -> 全局设置中开通,如下所示

<div align="center">
 <img class="medium-zoom lazy" loading="lazy" src="../images/cloud-payment-function/03-payment.png" alt="小程序-云开发" />
</div>

点击添加商户号后进行账号绑定，这时候绑定了微信支付的商户号管理员的微信会收到一条授权确认的模板消息

点击模板消息会弹出服务商助手小程序,确认授权之后就可以在云开发控制台看到绑定状态为“已绑定”，而`JS API`权限也会显示“已授权”

## 微信支付流程

1. 在小程序端:用户在小程序端点击支付时,使用`wx.cloud.callFunction`调用云函数(例如:支付云函数名为`questionPay`),并将商品描述(`body`),商品订单号`outTradeNo`,子商户号`subMchId`,总金额`totalFee`等信息参数传递给`questionPay`云函数
2. 在云函数端: 在`questionPay`云函数中调用统一下单接口`cloud.cloudPay.unifiedOrder()`,该函数接收一对象,包含的参数有,商品描述(`body`),商品订单号(`outTradeNo`),云坏境的 Id,以及需要填写结果通知回调函数(如:`wechatpay`),它是用来接收异步支付的结果,`questionPay`云函数会返回成功结果的对象中会包含`payment`字段(包含:`appId`,`nonceStr`,`package`,`paySign`)

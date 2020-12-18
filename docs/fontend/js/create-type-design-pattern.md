---
title: 创建型设计模式
autoGroup-1: 设计模式
---

## 创建型设计模式

## 快速导航

<TOC />

## 前言

创建型设计模式描述了用于创建对象的"类"或方法,而不需要你自己直接创建对象,在决定用什么对象和什么对象类型才是自己要面对的特定情况和需求最为相关的,此抽象层给了代码更高的灵活性

以下介绍 5 种创建型设计模式

## 创建型设计模式

### 工场模式

利用工厂模式可以实现不指定特定的类而创建出来的对象

在以前,当涉及"类"时,我们需要使用`javaScript`关键字`new`来创建某特定类或子类的实例,而利用工场模式,对象的创建处理过程被予以抽象

使得相对复杂的对象创建处理过程得以封装于简单的接口之下,而不需要使用`new`关键字

这个抽象意味着,用作创建各个实例的后台类的类型和方法可以随时被完全替换,而不需要改变接口来适应类的创建

从其他开发者角度来说,并需要理会接口底下所发生的变化,如果预知到在将来可能需要作出许多更改,但又不希望必须重写散布在大量其他代码中的类的实例化代码,则使用工场模式是很理想的做法

根据工厂方法的不同输入参数,实现了基于若干个不同的"类"进行对象的实例化

```js
// 定义一个工厂,它会基于所输入的内容,使用最合适的类来为我们创建出相应的表单域对象
var FormFieldFactory = {
  // makeField方法使用以下2个选项
  // type定义所创建的表单域对象的类型,例如:text,email,或button
  // displayText,基于对象的类型,定义表单域的placeholder(占位符)文本或按钮上所显示的文本
  makeField: function(options) {
    var options = options || {},
      type = options.type || 'text',
      displayText = options.displayText || '',
      field;

    // 基于所提供的类型使用最合适的类来创建对象实例
    switch (type) {
      case 'text':
        field = new TextField(displayText);
        break;
      case 'email':
        field = new EmailField(displayText);
        break;
      case 'button':
        field = new ButtonField(displayText);
        break;
      // 如果不确定,则使用TextField,"类"
      default:
        field = new TextField(displayText);
        break;
    }
    return field;
  },
};

// 定义TextField类用于创建input表单元素
function TextField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的placeholder文本值来创建一个DOM元素
TextField.prototype.getELement = function() {
  var textField = document.createElement('input');
  textField.setAttribute('type', 'text');
  textField.setAttribute('placeholder', this.displayText);

  return textField;
};

// 定义EmailField类用于创建input emial表单元素
function EmailField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的placeholder文本值来创建一个DOM元素
EmailField.prototype.getElement = function() {
  var emailField = document.createElement('input');
  emailField.setAttribute('type', 'email');
  emailField.setAttribute('placeholder', this.displayText);
  return emailField;
};

// 定义ButtonField类,用于创建button表单元素
function ButtonField(displayText) {
  this.displayText = displayText;
}

// getElement方法将利用所提供的在按钮上显示的文本值来创建一个DOM元素
ButtonField.prototype.getElement = function() {
  var button = document.createElement('button');
  button.setAttribute('type', 'submit');
  button.innerHTML = this.displayText;

  return button;
};
```

## 使用工厂模式

使用工厂来创建一个文本输入表单域，一个 email 表单作用域和一个提交按钮

::: tip 注意
留意,在不需要知道底层那些类或他们的特定输入的情况下创建表单域的,FormFieldFactory 对该方式进行了抽象
:::

```js
var textField = FormFieldFactory.makdeField({
    type: 'text',
    displayText: '请输入地止',
  }),
  emailField = FormFieldFactory.makeField({
    type: 'email',
    displayText: '请输入邮件地止',
  }),
  buttonField = FormFieldFactory.makeField({
    type: 'button',
    displayText: 'Submit',
  });

// 等到浏览器的load事件触发后,把由这3个新创建的对象所表示的DOM元素添加至当前页面

window.addEventListener(
  'load',
  function() {
    var bodyElement = document.body;
    bodyElement.appendChild(textField.getElement());
    bodyElement.appendChild(emailField.getElement());
    bodyElement.appendChild(buttonField.getElement());
  },
  false
);
```

当需要在代码的其余所有部分通过屏蔽较为复杂的对象创建方法来简化某些特定独享的创建过程时,使用工厂模式最合适不过了的

<footer-FooterLink :isShareLink="true" :isDaShang="true" />
<footer-FeedBack />

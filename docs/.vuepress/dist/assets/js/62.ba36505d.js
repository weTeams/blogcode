(window.webpackJsonp=window.webpackJsonp||[]).push([[62],{506:function(t,e,n){},821:function(t,e,n){"use strict";var s=n(506);n.n(s).a},864:function(t,e,n){"use strict";n.r(e);n(67);var s={name:"regExpress",props:["label","input","placeholer","type","btntext"],data:function(){return{result:"",labelText:this.label,inputVal:this.input,inputType:this.type,btnText:this.btntext}},methods:{checkUrl:function(t){/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\*\+,;=.]+$/.test(t)?(this.result=t,this.inputVal=""):this.errMessage("您输入的url有误,请重新输入")},checkPhone:function(t){if(!/^1(3|4|5|6|7|8|9)\d{9}$/.test(t))return this.errMessage("您输入的手机号码有误,请重新输入"),!1;this.result=t,this.inputVal=""},checkEmail:function(t){if(!/\w[-\w.+]*@([A-Za-z0-9][-A-Za-z0-9]+\.)+[A-Za-z]{2,14}/g.test(t))return this.errMessage("您输入的邮箱有误,请重新输入"),!1;this.result=t,this.inputVal=""},errMessage:function(t){this.$message({showClose:!0,message:t,type:"error"})},handleElBtn:function(t,e){switch(e){case"url":this.checkUrl(t);break;case"phone":this.checkPhone(t);break;case"email":this.checkEmail(t)}}},mounted:function(){}},i=(n(821),n(12)),l=Object(i.a)(s,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-form",{staticClass:"demo-form-inline",attrs:{inline:!0}},[n("el-form-item",{attrs:{label:t.labelText}},[n("el-input",{staticClass:"el-input",attrs:{type:t.inputType,clearable:""},model:{value:t.inputVal,callback:function(e){t.inputVal=e},expression:"inputVal"}})],1),t._v(" "),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.handleElBtn(t.inputVal,t.inputType)}}},[t._v(t._s(t.btnText))])],1)],1),t._v(" "),n("div",[t._v("校验结果:  "+t._s(t.result))])],1)}),[],!1,null,"488a1295",null);e.default=l.exports}}]);
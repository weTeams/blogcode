/** 监听copy事件 */
document.addEventListener('copy', function(e) {
  //取消默认事件，才能修改复制的值
  e.preventDefault();
  //复制的内容
  var copyTxt;
  if (window.getSelection(0).toString().length >= 80) {
    copyTxt = `${window
      .getSelection(0)
      .toString()}\n\n作者:随笔川迹\n站长:itclanCoder\n公众号:itclanCoder\n链接: ${
      window.location.href
    }\n来源: itclanCoder\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请附上原文出处及本链接。`;
  } else {
    copyTxt = window.getSelection(0).toString();
  }
  if (e.clipboardData) {
    e.clipboardData.setData('text/plain', copyTxt);
  } else if (window.clipboardData) {
    return window.clipboardData.setData('text', copyTxt);
  }
});

// 在线问答
window.$crisp = [];
window.CRISP_WEBSITE_ID = '571f33d1-0d49-4e29-a815-517a2c7b24c9';
(function() {
  d = document;
  s = d.createElement('script');
  s.src = 'https://client.crisp.chat/l.js';
  s.async = 1;
  d.getElementsByTagName('head')[0].appendChild(s);
})();

// 浏览器控制台显示
window.console &&
  (console.groupCollapsed(
    '%citclanCoder',
    'color:#3eaf7c;font-size:28px;font-weight:300'
  ),
  console.log('书以启智,技于谋生,活出斜杠.\n祝屏幕前正阅读的您码中致富'),
  console.log(`%c http://itclan.cn\n`, 'color:#3eaf7c'),
  console.log(`%c http://coder.itclan.cn\n`, 'color:#3eaf7c'),
  console.log(
    '%c QQ交流群(1):64346880,微信公众号:itclanCoder',
    'color:#3eaf7c'
  ),
  console.groupEnd());

// 移动端下,禁止用户缩放
document.addEventListener('touchstart', function(event) {
  if (event.touches.length > 1) {
    event.preventDefault();
  }
});
document.addEventListener('gesturestart', function(event) {
  event.preventDefault();
});
window.onload = function() {
  themeDefaultContent = $(
    '#app > .theme-container>.page > .theme-default-content'
  );

  themeDefaultContent.attr('id', 'container');
  themeDefaultContent.css('height', '1500px');
  btw = new BTWPlugin();
  btw.init({
    id: 'container',
    blogId: '15005-1605528910159-988',
    name: 'itclanCoder',
    qrcode: 'http://ii066.cn/rEDDQY',
    keyword: '验证码',
  });
};

const type = {
  searchs: [
    {
      label: '百度',
      name: 'baidu',
      url: `https://baidu.com/s?wd=`,
      tip: '百度搜索/按Enter键或点击右侧搜索',
    },
    {
      label: 'Bing',
      name: 'bing',
      url: `https://cn.bing.com/search?q=`,
      tip: 'Bing微软搜索',
    },

    {
      label: 'Google',
      name: 'google',
      url: `https://www.google.com/search?q=`,
      tip: 'Google搜索,请提前准备好梯子~',
    },

    {
      label: 'Magi',
      name: 'magi',
      url: `https://magi.com/search?q=`,
      tip: 'Magi结构化搜索',
    },

    {
      label: '搜狗',
      name: 'sougou',
      url: `https://www.sogou.com/web?query=`,
      tip: '搜狗搜索',
    },

    {
      label: '神马',
      name: 'shenma',
      url: `https://yz.m.sm.cn/s?q=`,
      tip: '神马搜索',
    },

    {
      label: '秘迹',
      name: 'miji',
      url: `https://mijisou.com/?q=`,
      tip: '秘迹搜索',
    },
  ],

  tools: [
    {
      label: '权重查询',
      name: 'weightfind',
      url: `http://rank.chinaz.com/all/`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: '友链检测',
      name: 'friendlink',
      url: `https://link.chinaz.com/`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: '备案查询',
      name: 'keeprecord',
      url: `https://icp.aizhan.com/`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: 'ping检测',
      name: 'pingcheck',
      url: `http://ping.chinaz.com/`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: '死链检测',
      name: 'deadcheck',
      url: `https://ntool.chinaz.com/tools/links`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: '关键词挖掘',
      name: 'keywordmin',
      url: `http://www.ciku5.com/`,
      tip: '请输入网址(不带http(s)://)',
    },

    {
      label: 'IP/域名查询',
      name: 'ipdomain',
      url: `https://site.ip138.com/`,
      tip: '请输入ip或域名',
    },

    {
      label: '百度统计',
      name: 'alicloud',
      url: `https://tongji.baidu.com/`,
      tip: '请输入百度统计',
    },
  ],

  communitys: [
    {
      label: 'MDN',
      name: 'MDN',
      url: `https://developer.mozilla.org/zh-CN/search?q=`,
      tip: '在MDN内搜索',
    },
    {
      label: 'gitHub',
      name: 'github',
      url: `https://github.com/search?q=`,
      tip: '在github内搜索',
    },

    {
      label: 'segmentfault',
      name: 'segmentfault',
      url: `https://segmentfault.com/search?q`,
      tip: '在segmentfault搜索',
    },

    {
      label: '掘金',
      name: 'juejin',
      url: `https://juejin.cn/search?query=`,
      tip: '在掘金内搜索',
    },

    {
      label: 'stackoverflow',
      name: 'stackoverflow',
      url: `https://stackoverflow.com/nocaptcha?s=`,
      tip: '在stackoverflow内搜索',
    },
    {
      label: '博客园',
      name: 'cnblogs',
      url: `https://zzk.cnblogs.com/s?w=`,
      tip: '在博客园内搜索',
    },

    {
      label: 'csdn',
      name: 'csdn',
      url: `https://so.csdn.net/so/search/s.do?q=`,
      tip: '在csdn内搜索',
    },

    {
      label: 'v2ex',
      name: 'v2ex',
      url: `https://www.v2ex.com/go/`,
      tip: '在v2ex内搜索',
    },

    {
      label: '简书',
      name: '简书',
      url: `https://www.jianshu.com/search?q=`,
      tip: '在简书内搜索',
    },
    {
      label: '知乎',
      name: 'zhihu',
      url: `https://www.zhihu.com/search?q=`,
      tip: '在知乎内搜索关键词',
    },

    {
      label: '微信',
      name: 'weixin',
      url: `https://weixin.sogou.com/weixin?type=2&query=`,
      tip: '在微信内搜索关键词',
    },

    {
      label: '微博',
      name: 'weibo',
      url: `https://s.weibo.com/weibo/`,
      tip: '在微博中搜索',
    },

    {
      label: '豆瓣',
      name: 'douban',
      url: `https://www.douban.com/search?q=`,
      tip: '在豆瓣内搜索',
    },

    {
      label: '搜外问答',
      name: 'deadcheck',
      url: `https://ask.seowhy.com/search/?q`,
      tip: '搜外问答',
    },
  ],

  pictureAssets: [
    {
      label: 'unsplash',
      name: 'unsplash',
      url: 'https://unsplash.com/s/photos/',
      tip: '直接输入关键词(英文),在unsplash上搜索免费高质量图片',
    },

    {
      label: 'pixabay',
      name: 'pixabay',
      url: 'https://pixabay.com/images/search/',
      tip: '直接输入关键词(英文),在pixabay上搜索免费高质量图片',
    },
  ],

  designDraws: [
    {
      label: '可画canva',
      name: 'canva',
      url: 'canva.com/design/play?category=',
      tip: '快速通过拖拉拽的方式制作漂亮的设计作品',
    },
  ],

  codehosts: [
    {
      label: 'github',
      name: 'github',
      url: `https://github.com/search?q=`,
      tip: '在github托管代码',
    },
    {
      label: 'astra',
      name: 'astralapp',
      url: `https://astralapp.com/`,
      tip: '管理github的star',
    },
    {
      label: 'gitee',
      name: 'gitee',
      url: `https://search.gitee.com/?skin=rec&type=repository&q=`,
      tip: '在gitee上托管代码',
    },
    {
      label: 'coding',
      name: 'coding',
      url: `https://e.coding.net/`,
      tip: '去coding上托管代码',
    },

    {
      label: '腾讯工蜂',
      name: 'tencent',
      url: `https://git.code.tencent.com/`,
      tip: '去腾讯工蜂上托管代码',
    },
  ],

  jobwanteds: [
    {
      label: '拉钩',
      name: 'lagou',
      url: `https://www.lagou.com/jobs/`,
      tip: '直接搜索岗位:如前端开发',
    },

    {
      label: 'boss直聘',
      name: 'boss',
      url: `https://www.zhipin.com/job_detail/?query=`,
      tip: '直接搜索岗位:如后端开发',
    },

    {
      label: '大街网',
      name: 'dajie',
      url: `https://so.dajie.com/job/search?keyword=`,
      tip: '直接搜索岗位:如算法工程师',
    },

    {
      label: '猎聘网',
      name: 'liepin',
      url: `https://wow.liepin.com/`,
      tip: '直接搜索岗位:如数据库开发',
    },

    {
      label: '智联招聘',
      name: 'zhilian',
      url: `https://landing.zhaopin.com/`,
      tip: '直接搜索岗位:如数据库开发',
    },

    {
      label: '前程无忧',
      name: 'qianchengwuyou',
      url: `https://mkt.51job.com/`,
      tip: '直接搜索岗位:如小程序云开发',
    },
  ],

  services: [
    {
      name: '阿里云',
      url: 'https://www.aliyun.com/',
      tip: '国内使用众多的云服务器厂商',
    },

    {
      name: '腾讯云',
      url: 'https://cloud.tencent.com/',
      tip: '国内云服务器-小程序-云开发-serverless先驱',
    },

    {
      name: 'dnspod',
      url: 'https://www.dnspod.cn/',
      tip: 'dnspod-腾讯',
    },

    {
      name: '西部数码',
      url: 'https://www.west.cn/',
      tip: '国内服务器厂商',
    },

    {
      name: 'cloudleft',
      url: 'http://www.cloudleft.com/',
      tip: '云左科技-海外服务器厂商',
    },

    {
      name: 'bluehost',
      url: 'https://cn.bluehost.com/',
      tip: 'wordpress建站-国外服务器厂商-无需备案',
    },

    {
      name: 'us Domain center',
      url: 'https://www.usdomaincenter.com/',
      tip: '专门用wordpress(无脑式建站)-域名免费(需要域名和空间购买)',
    },

    {
      name: 'siteGround',
      url: 'https://siteground.com/',
      tip: '国外服务器厂商',
    },
  ],
};

module.exports = type;

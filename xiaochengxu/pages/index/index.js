//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [{
      'url': 'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg'
    }, {
      'url': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg'
    }, {
      'url': 'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    }
    ],
    indicatorDots: true,
    circular: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  }
})

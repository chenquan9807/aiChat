//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: '进入聊天室',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  goChat: function (event) {
    wx.navigateTo({
      url: '../grid/grid'
    })
    // wx.request({
    //   url: 'http://www.imooc.com',
    //   method: 'get',
    //   header: {},
    //   success: function (res) {
    //     console.log(res.data)
    //   },
    //   fail: function (res) {
    //     console.log('res.fail')
    //   }
    // })
  },
  storage: function () {
    wx.setStorage({
      key: 'test',
      data: 'Hello world!',
    }),
    wx.getStorage({
      key: 'test',
      success: function(res) {
        console.log('1',res.data)
      },
    }),
    console.log('2',wx.getStorageSync('test')),
    console.log('Storage')
  },
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})

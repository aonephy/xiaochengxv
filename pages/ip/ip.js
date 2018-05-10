//index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo: {},
    city: '',
    ip:'',

  },
  ipInput: function (e) {
    this.setData({
      ip: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.setNavigationBarTitle({
      title: '皮皮侠'
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  clickButton: function () {
  
    var ip = this.data.ip
    if (ip == '') ip = '192.168.1.1';
    this.setData({
      ip: ip,
    })
    var that = this
    wx.request({
      url: 'https://s.aonephy.top/ip/?ip=' + ip,
      data: {
        x: '',
        y: ''
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
       
        that.setData({
          city: res.data,
        })

      }
    })
  }
})

// pages/business/login/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    loginText1: '商家登录',
    loginText2: '会员登录',
    isLoginBool: false, // 判断商家true/会员false登录布尔值
    isLogin: false,
    id: 1, // 商家登录1/会员登录2
  },

  onLogin(value) {
    if (this.data.isLogin) {
      switch (value.currentTarget.dataset.value) {
        case '微信快速登录':
          console.log('微信快速登录')
          break;

        case '登 录':
          console.log('登录')
          break;

        default:
          break;
      }
      wx.navigateTo({
        url: '../login2/index',
        success: (res) => {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('acceptDataFromOpenerPage', { id: this.data.id })
        }
      })
    }

    switch (value.currentTarget.dataset.value) {
      case '商家登录':
        this.setData({
          isLoginBool: true,
          id: 1
        })
        break;

      case '会员登录':
        this.setData({
          isLoginBool: false,
          id: 2
        })
        break;

      default:
        break;
    }
    this.setData({
      loginText1: '微信快速登录',
      loginText2: '登 录',
      isLogin: true,
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

  }
})
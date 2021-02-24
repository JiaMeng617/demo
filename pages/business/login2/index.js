// pages/business/login2/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    dataType: null,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('acceptDataFromOpenerPage', (data) => {
      this.setData({
        dataType: data.id
      })
    })
  },

  bindgetuserinfo(e) {
    if(!e.detail.userInfo) return
    console.log('获取信息回调', e.detail)
    wx.setStorageSync('userInfo', e.detail.userInfo)
    wx.navigateTo({
      url: '../homePage/index',
      success: (res) => {
        res.eventChannel.emit('dataType', { dataType: this.data.dataType })
      }
    })
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
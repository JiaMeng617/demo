// pages/business/userInfo/index.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    position: '', //获取位置
    latitude: 0,  //纬度
    longitude: 0,  //经度
    userImg: '', //企业图片
    name: '123', //企业名称：
    address: '123', //企业地址：
    phone: 1231231, //负责人电话：
    testing: 123123, //获取验证码
    TimeNum: '获取验证码', // 验证码计时器
    getTestingBool: false, // 获取验证码布尔值
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log('options---', options)
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('userImg', (data) => {
      this.setData({
        userImg: data.userImg
      })
    })
    // this.getPostiton()
  },

  // 获取位置
  getPostiton() {
    wx.chooseLocation({
      success:res => {
        this.setData({
          position: res.address + res.name,
          latitude: res.latitude,
          longitude: res.longitude
        })
      },
      fail:err => {
        console.log('地图失败回调--', res)
      }
    })
  },

  // 上传头像
  uplformSubmitoadImg() {
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: (res) => {
        // tempFilePath可以作为img标签的src属性显示图片
        this.setData({
          userImg: res.tempFilePaths
        })
        const tempFilePaths = res.tempFilePaths
      },
      complete: (res) => {},
    })
  },

  // 获取验证码
  getTesting() {
    this.timing()
  },

  // 计时器
  timing() {
    let setInter
    let num = 60
    let bool = true
    setInter = setInterval(() => {
      num--
      if (num === 0) {
        num = '获取验证码'
        bool = false
        clearInterval(setInter)
      }
      this.setData({
        TimeNum: num,
        getTestingBool: bool
      })
    }, 1000)
  },

  // 提交表单
  formSubmit(e) {
    e.detail.value.userImg = this.data.userImg
    console.log('form发生了submit事件，携带数据为：', e.detail.value)
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
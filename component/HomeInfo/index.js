// pages/component/HomeInfo/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataType: {
      type: Number,
      value: null,
      observer: 'dataTypeFun'// 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串 通常 newVal 就是新设置的数据， oldVal 是旧数据
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    companyName: '',
    money: null,
    backImg: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/2.png',
    userImg: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/11.png'
  },

  /**
   * 组件的方法列表
   */
  methods: {
    dataTypeFun(newVal, oldVal, changedPath) {
      let dataList = []
      switch (newVal) {
        case 1:
          dataList = this.businessDataFun()
          break;

        case 2:
          dataList = this.memberDataFun()
          break;

        default:
          break;
      }
      this.setData({
        companyName: dataList.userUname,
        money: dataList.money
      })
    },
    businessDataFun() {
      console.log('商家信息获取')
      return {
        userUname: '哇哈哈有限公司',
        money: 111,
      }
    },
    memberDataFun() {
      console.log('会员信息获取')
      return {
        userUname: '没什么钱的会员',
        money: 0,
      }
    },
    userInfo() {
      wx.navigateTo({
        url: '/pages/business/userInfo/index',
        success: (res) => {
          // 通过eventChannel向被打开页面传送数据
          res.eventChannel.emit('userImg', { userImg: this.data.userImg })
        }
      })
    },
  }
})

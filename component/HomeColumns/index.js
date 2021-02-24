// pages/component/HomeSwiper/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    dataType: {
      type: Number,
      value: null,
      observer: 'dataTypeFun' // 属性被改变时执行的函数（可选），也可以写成在methods段中定义的方法名字符串 通常 newVal 就是新设置的数据， oldVal 是旧数据
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    imageUrl: []
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
        imageUrl: dataList
      })
    },
    businessDataFun() {
      console.log('商家信息获取')
      return [{
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/3.png',
        name: '商家入住',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/4.png',
        name: '水卷发布',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/4.png',
        name: '订单管理',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/5.png',
        name: '送水任务',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/6.png',
        name: '财务流水',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/7.png',
        name: '硬件申请',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/8.png',
        name: '联系客服',
      },
    ]
    },
    memberDataFun() {
      console.log('会员信息获取')
      return [{
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/3.png',
        name: '商家入住',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/4.png',
        name: '水卷发布',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/4.png',
        name: '订单管理',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/5.png',
        name: '送水任务',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/6.png',
        name: '财务流水',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/7.png',
        name: '硬件申请',
      },
      {
        url: '',
        imgUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/8.png',
        name: '联系客服',
      },
    ]
    }
  }
})
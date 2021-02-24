// pages/component/WaresList/index.js
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
    dataList: [],
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
        dataList: dataList
      })
    },
    businessDataFun() {
      console.log('商家信息获取')
      return [{
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
    ]
    },
    memberDataFun() {
      console.log('会员信息获取')
      return [{
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
      {
        url: '',
        imageUrl: 'cloud://water-h2hx9.7761-water-h2hx9-1301743701/images/10.png',
        norms: '3桶，9L/桶',
        title: '农夫山泉饮用水天然饮用 水天然饮用水',
        mouny: 56
      },
    ]
    }
  },

  // 监听
  observers: {},

  lifetimes: {
    created: () => {
      // 在组件实例刚刚被创建时执行
    },
    ready: () => {
      // 在组件实例进入页面节点树时执行
    },
    attached: function () {
      // 在组件实例进入页面节点树时执行
    },
    detached: function () {
      // 在组件实例被从页面节点树移除时执行
    },
  },
})
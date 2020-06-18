// user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shiShow:true,
    shuShow:true,
    selShow:true,
    show: true,
    aa : false,
    getInput : null,
    region: ['上海市', '上海市', '宝山区'],
    time: ['1月10日', '1月11日'],
    list:['实时数据','历史数据','模拟数据'],
    thing: [{
        name: "笔",
        show: true
      },
      {
        name: "墨",
        show: true
      },
      {
        name: "纸",
        show: true
      },
      {
        name: "砚",
        show: true
      },
      {
        name: "皮皮",
        show: true
      }
    ]
  },


  //省市区选择器：
  bindRegionChange(e) {
    this.region = e.detail.value
  },
  changeShishi:function(){
    console.log("ww")
    this.setData({
      shiShow: !this.data.shiShow 
    })
  },
  changeShuju: function () {
    console.log("qq")
    this.setData({
      shuShow: !this.data.shuShow
    })
    console.log(this.data.shuShow)
  },
  select: function () {
    console.log("ee")
    this.setData({
      selShow: !this.data.selShow
    })
  },
  choose: function (e) {
    console.log(e.currentTarget.dataset.text)
    console.log(e.detail.value)
    e.detail.value = e.currentTarget.dataset.text
  },
  getInput: function (e) {
    this.data.getInput = e.detail.value;
    console.log(e.detail.value)
  },
  open: function() {
    // this.thing.show = !this.thing.show
    for (var i = 0; i < this.data.thing.length; i++) {
      console.log(this.data.thing[i].show)
    }
    console.log(item.show)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})
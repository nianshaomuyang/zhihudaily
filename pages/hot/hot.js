Page({

  /**
   * 页面的初始数据
   */
    data: {
        imgUrls: [
            '/assets/img/001.jpg',
            '/assets/img/002.jpg', 
            '/assets/img/003.jpg'
        ],
        indicatorDots: true,
        autoplay: true,
        interval: 3000,
        duration: 1000,
        news:[],
        hidden:false
        
    },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.loadNew();
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
    
  },
  loadNew:function(){
      var page=this;
      wx.request({
          url: 'https://news-at.zhihu.com/api/3/news/hot',
         
          header: {
              'content-type': 'application/json'
          },
          success:function(res){
              var titles=res.data.recent;
              page.setData({ news: titles, hidden: true});
          }
      })
  },
  detail:function(e){
      wx.setStorageSync('newid', e.currentTarget.id)
      wx.navigateTo({
          url: '../detail/detail'
      })
  }
})
Page({

  /**
   * 页面的初始数据
   */
  data: {
    news:{},
    new_news:{},
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
    loadNew: function () {
        var page = this;
        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/latest',

            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var titles = res.data.top_stories;
                var secondtitles = res.data.stories;
                page.setData({ news: titles, new_news: secondtitles, hidden: true });
            }
        })
    },
    detail: function (e) {
        wx.setStorageSync('newid', e.currentTarget.id)
        wx.navigateTo({
            url: '../detail/detail'
        })
    }
})
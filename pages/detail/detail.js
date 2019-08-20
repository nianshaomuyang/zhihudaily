Page({

  /**
   * 页面的初始数据
   */
  data: {
    newdetail:{},
    body:null,
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
        var newid=wx.getStorageSync('newid');
        wx.request({
            url: 'https://news-at.zhihu.com/api/4/news/'+newid,

            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                var newdetail= res.data;
                var body = newdetail.body;
                var title = body.match(/<h2 class=\"question-title\">.*?<\/h2>/g)
                body = body.match(/<p>.*?<\/p>/g);
                for (var i = 1; i < body.length; i++) {
                        body[i] = body[i].replace(/<p>/g, '')
                            .replace(/<\/p>/g, '')
                            .replace(/<strong>/g, '')
                            .replace(/<\/strong>/g, '')
                            .replace(/\n/g, '')
                            .replace(/<a.*?\/a>/g, '')
                            .replace(/<img.*?>/g, '"')
                            .replace(/(http:|https:).*?\.(jpg|jpeg|gif|png)/g, '"');   
                }
                var real='';
                for (var i = 1; i < body.length; i++){    
                        real=real+body[i]+'\n'
                }
                for (var i = 1; i < title.length; i++) {
                    title[i] = title[i].replace(/<h2 class=\"question-title\">/g, '')
                        .replace(/<\/h2>/g, '');
                }
                var realtitle = '';
                for (var i = 1; i < title.length; i++) {
                    realtitle = realtitle + title[i] + '\n'
                }
                if(!realtitle||realtitle=='\n'){
                    realtitle = newdetail.title
                }
                page.setData({ newdetail: newdetail, body: real, title: realtitle,hidden:true});
            }
        })
    }
})
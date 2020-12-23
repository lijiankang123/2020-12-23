// pages/movie/movie.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
     info:{},
     isOpen:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
     let id = options.id
     wx.request({
       url: 'https://api.tedu.cn/detail.php' ,
       method:'GET',
       data:{
         id:id
       },
       success:res=>{
         this.setData({
          info:res.data
         })
       }
     });
     let db = wx.cloud.database();
     let coll = db.collection('comments');
     coll.get({
      success:res=>{
        console.log(res.data)
      }
     })
  },


  toggleDescription(){
    let isOpen = this.data.isOpen;
    this.setData({
      isOpen:!isOpen
    })
  },
  //   预览图片
  previewImage(event){
    wx.previewImage({
      urls: this.data.info.thumb,
      current:event.target.dataset.path
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
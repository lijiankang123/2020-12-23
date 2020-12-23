//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentTab:1,
    movieList:[],
    pageno:1
  },
  switchTab(event){
    let id = event.target.dataset.id;
    this.setData({
      currentTab:id,
      pageno:1,
      movieList:[]
    })
    this.loadData();
  },
  
  onLoad: function () {
   this.loadData();
  },

  loadData(){
    let pageno = this.data.pageno;
    let offset = (pageno - 1)*20;
    wx.showLoading({
      title: '加载中...',
    })
    wx.request({
      url: 'https://api.tedu.cn/index.php',
      method:'GET',
      data:{
        cid:this.data.currentTab,
        offset:offset
      },
       success:res=>{
         let movieList = this.data.movieList;
         movieList = movieList.concat(res.data);
         this.setData({
          movieList:movieList
         })
         wx.hideLoading();
       }
    })
  },
  onReachBottom(){
    let pageno = this.data.pageno;
    pageno +=1;
    this.setData({
      pageno:pageno
    })
    // let offset = (pageno - 1) * 20;
    // wx.request({
    //   url: 'https://api.tedu.cn/index.php',
    //   method:'GET',
    //   data:{
    //     cid:this.data.currentTab,
    //     offset:offset
    //   },
    //   success:res=>{
    //     let movieList = this.data.movieList;
    //     movieList = movieList.concat(res.data);
    //     this.setData({
    //       movieList:movieList
    //     })
    //   }
    // })
    this.loadData();
  },
  onPullDownRefresh(){}
})

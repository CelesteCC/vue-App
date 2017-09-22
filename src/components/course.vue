<template>
  <div class="main">
    <div class="search_bar">
      <input type="text" v-model="val" @keyup="get($event)" placeholder="歌名、歌词、歌手、专辑"/>
      <span class="iconfont icon-search" @click="search()"></span>
    </div>
    <div class="content">
      <p v-show="music.length==0" class="search_none"><img class="" src="../assets/pr_none.jpg" alt=""/>暂无搜索记录</p>
      <div v-show="music.length!=0" class="">
        <p>专辑</p>
        <ul class="songs_content">
          <li v-for="(items,index) in album">
            <div class="songs_content_info">
              <p>
                <span class="songs_content_info_name">{{items.albumname}}</span>
                <span class="songs_content_info_artist">{{items.artistname}}</span>
              </p>
            </div>
            <div class="songs_content_down"><span class="iconfont icon-xiazai"></span></div>
          </li>
        </ul>
        <p>歌曲</p>
        <ul class="songs_content">
          <li v-for="(items,index) in music">
            <div class="songs_content_info">
              <p>
                <span class="songs_content_info_name">{{items.songname}}</span>
                <span class="songs_content_info_artist">{{items.artistname}}</span>
              </p>
            </div>
            <div class="songs_content_down"><span class="iconfont icon-xiazai"></span></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '课程',
      music:[],
      album:[],
      val:''
    }
  },
  created(){
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.getRecommandSongList&song_id=8059247&num=10',{
      type:'jsonp',
      //jsonp:'callback'
    }).then(function(res){
      console.log(res)
    })
  },
  methods:{
    search(event){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query='+this.val+'',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
        if(this.val!=''&&res.body.errno!=22001) {
          this.music = res.body.song;
          this.album = res.body.album;
          console.log(res)
        }else{
          this.music = '';
        }
      })
    },
    get(ev){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.search.catalogSug&query='+this.val+'',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
        if( this.val!='' && res.body.errno!=22001 ) {
          this.music = res.body.song;
          this.album = res.body.album;
          console.log(res)
        }else{
          this.music = '';
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.main{font-size: 0.24rem;padding-top: 0.88rem;height: 100%;}
.content{
  height: 100%;
  overflow-y: auto;
}
.search_bar{
  height: 0.88rem;
  background: #fff;
  margin-top: -0.88rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 0.2rem;
  box-shadow: 0 0 10px rgba(0,0,0,0.1);
  position: relative;
  input{
    width: 100%;
    border: 1px solid #ccc;
    height: 0.6rem;
    border-radius: 0.6rem;
    padding: 0 0.15rem;
    outline: none;
    font-size: 0.28rem;
  }
  span{
    position: absolute;
    right: 0.2rem;
    height: 0.6rem;
    width: 0.8rem;
    line-height: 0.6rem;
    color: #333;
    font-size: 0.32rem;
  }
}
.album_pic{
  display: block;
  width: 100%;
}
.songs_content{
  padding:0 0.2rem;
  li{
    position: relative;
    height: 1.2rem;
    display: flex;
    justify-content: center;
    align-items:center;
    &:last-child{
      :after{
        content: normal;
      }
    }
    :after{
      content: '';
      position: absolute;
      width: 100%;
      height: 1px;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      background: #ccc;
      left: 0;
      bottom: 0;
    }
    .songs_content_info{
      display: flex;
      flex: 1;
      height: 100%;
      justify-content: center;
      align-items:center;
      p{
        flex: 6;
        text-align: left;
        span{
          font-size: 0.24rem;
          color: #999
        }
        .songs_content_info_name{
          display: block;
          font-size: 0.28rem;
          color: #333
        }
      }
      .songs_content_info_num{
        flex: 1;
        font-size: 0.32rem;
        color: #999;
      }
    }
    .songs_content_down{
      width: 1.2rem;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 0.42rem;
        color: #008800;
      }
    }
  }
}
.songs_content li:last-child:after{content: normal}
</style>

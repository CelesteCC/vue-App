<template>
  <div class="main">
    <img class="album_pic" src="" alt=""/>
    <ul class="songs_content">
      <li v-for="(items,index) in music">
        <div class="songs_content_info">
          <span class="songs_content_info_num">{{index+1}}</span>
          <p>
            <span class="songs_content_info_name">{{items.album_title}}</span>
            <span class="songs_content_info_artist">{{items.artist_name}}</span>
          </p>
        </div>
        <div class="songs_content_down"></div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '课程',
      music:[]
    }
  },
  created(){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?size=20&type=2&callback=cb_list&_t=1468380543284&format=json&method=baidu.ting.billboard.billList',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
//        res.data["imgsrc"]=_self.imgsrc[i];  //将图片插入到数组中
         //this.$set('msg',res.data.song_list)
        this.music=res.data.song_list;
        //console.log(res.data.song_list)
      }, function(res){
        console.log('加载失败了...')
      })
  console.log(this.music)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main{font-size: 0.24rem;}
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
      background: url("../assets/download.png") center no-repeat;
      background-size: 0.48rem auto;
    }
  }
}
.songs_content li:last-child:after{content: normal}
</style>

<template>
  <div class="main pt">
    <v-header :title="title"></v-header>
    <!--<img class="album_pic" :src="albumPic" alt=""/>-->
    <div class="content">
      <ul class="songs_content">
        <li v-for="(items,index) in music" :key="index">
          <div class="songs_content_info">
            <span class="songs_content_info_num">{{index+1}}</span>
            <p>
              <router-link :to="{path:'/radioPlay', query:{id:items.song_id}}" @click="getDuration()">
                <span class="songs_content_info_name">{{items.title}}</span>
                <span class="songs_content_info_artist">{{items.artist_name}}</span>
              </router-link>
            </p>
          </div>
          <div class="songs_content_down"><router-link to=""></router-link></div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import header from "./header.vue"
  export default {
    name: 'albuminfo',
    components:{
      "v-header":header,
    },
    props:['time'],
    data () {
      return {
        title:'',
        music:[],
        duration:this.time
      }
    },
    created(){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.album.getAlbumInfo&album_id='+ this.$route.query.id+'',{
        type:'jsonp',
        jsonp:'callback',
        callback:'search_hot'
      }).then(function(res){
        this.title = res.data.albumInfo.title;
        this.music = res.data.songlist;
        //console.log(res)
      });
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=8059247',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
        this.duration = res.data.bitrate.file_duration;
        //this.title = this.duration;
        console.log(this.duration)
      });

    },
  methods:{
    getDuration(){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=8059247',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
        this.time = res.data.bitrate.file_duration;
        console.log(this.time)
      });
    }
  }
  }
</script>

<style scoped lang="scss">
  .con{height: 100%}
  .aplayer{
    position: fixed;
    bottom: 0;
    z-index: 2;
    background: #fff;
    width: 100%;
    left: 0;
  }
  .main{font-size: 0.24rem;height: 100%;padding-top: 1.24rem;}
  .content{padding: 0.2rem;}
  .album_pic{
    display: block;
    width: 100%;
  }
  .songs_content{
    padding:0 0.2rem;
    background:rgba(255,255,255,0.2);
    border-radius:0.12rem;
    height:100%;
    overflow-y:auto;
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
    background: rgba(255,255,255,0.1);
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
    color: #rgba(255,255,255,0.1)
  }
  .songs_content_info_name{
    display: block;
    font-size: 0.28rem;
    color: #fff
  }
  }
  .songs_content_info_num{
    flex: 1;
    font-size: 0.32rem;
    color: #fff;
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

<template>
  <div class="main">
    <v-header></v-header>
    <div class="content">
      <img class="album_pic" src="" alt=""/>
      <!--<audio src="audioSrc"></audio>-->
      <ul class="songs_content">
        <li v-for="(items,index) in music" :key="index">
          <div class="songs_content_info" @click="musicOn($event,index)" :id="items.song_id">
            <span class="songs_content_info_num">{{index+1}}</span>
            <p>
              <span class="songs_content_info_name">{{items.album_title}}</span>
              <span class="songs_content_info_artist">{{items.artist_name}}</span>
            </p>
          </div>
          <div class="songs_content_down" @click="download($event)"></div>
        </li>
      </ul>
    </div>
    <a-player mutex :music="songs" ref="player" :showlrc="3" v-if="flag" mode="circulation"></a-player>
  </div>
</template>
<script>
  import header from "./header.vue"
  import VueAplayer from 'vue-aplayer'
  export default {
    name: 'app',
    components:{
      "v-header":header,
      'a-player': VueAplayer
    },
    data () {
      return {
        music:[],
        flag:false,
        audioSrc:'',
        songs: [
          {
            title: '',
            author: '',
            url: '',
            pic: '',
            lrc: ''
          }
        ]
      }
    },
    mounted() {
     let aplayer = this.$refs.player.control;
      aplayer.pause();
    },
    created(){
      this.getData()
    },
    methods:{
      getData(){
        this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?size=20&type='+ this.$route.query.type +'&callback=cb_list&_t=1468380543284&format=json&method=baidu.ting.billboard.billList',{
          type:'jsonp',
          jsonp:'callback'
        }).then(function(res){
          this.music=res.data.song_list;
        }, function(res){
          console.log('加载失败了...')
        })
      },
      musicOn(event,index){
        let songid = event.currentTarget.getAttribute('id');
        event.stopPropagation();
        this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.playAAC&songid='+songid+'',{
          type:'jsonp',
          jsonp:'callback'
        }).then(function(res){
          this.songs[0].url = res.body.bitrate.file_link;
          this.songs[0].title = res.body.songinfo.album_title;
          this.songs[0].author = res.body.songinfo.author;
          console.log(this.songs)
          this.flag = true;
        }, function(res){
          console.log('加载失败了...')
        })
      },
      download(event){}
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .con{height: 100%}
  .content{
    background: #f7f7f7 url("../assets/title_bg.png") no-repeat center top;
    height:100%;
    background-size: 100% auto;
    padding: 1.28rem 0.2rem 0.2rem;
    text-align: center;
    color: #fff;
  }
  .aplayer{
    position: fixed;
    bottom: 0;
    z-index: 2;
    background: #fff;
    width: 100%;
    left: 0;
  }
  .main{font-size: 0.24rem;height: 100%}
  .album_pic{
    display: block;
    width: 100%;
  }
  .songs_content{
    padding:0 0.2rem;
  background:#fff;
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

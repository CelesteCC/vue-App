<template>
  <div class="main pt">
    <v-header :title="title"></v-header>
    <img class="album_pic" :src="albumPic" alt=""/>
    <div class="content">
      <ul class="songs_content">
        <li v-for="(items,index) in music" :key="index">
          <div class="songs_content_info" @click="musicOn($event,index)" :id="items.song_id">
            <span class="songs_content_info_num">{{index+1}}</span>
            <p>
              <span class="songs_content_info_name">{{items.album_title}}</span>
              <span class="songs_content_info_artist">{{items.artist_name}}</span>
            </p>
          </div>
          <div class="songs_content_down" @click="download($event)" :id="items.song_id"><router-link :to="downLink"></router-link></div>
        </li>
      </ul>
    </div>
    <!--<a-player mutex :music="songs" ref="player" :showlrc="3" v-if="flag" mode="circulation"></a-player>-->
  </div>
</template>
<script>
  import header from "./header.vue"
  /*import VueAplayer from 'vue-aplayer'*/
  export default {
    name: 'app',
    components:{
      "v-header":header,
      /*'a-player': VueAplayer*/
    },
    data () {
      return {
        title:'',
        music:[],
        flag:false,
        audioSrc:'',
        downLink:'',
        songid:'',
        albumPic:'',
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
     /*let aplayer = this.$refs.player.control;
      aplayer.pause();*/
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
          this.albumPic=res.data.billboard.pic_s210;
          this.title = res.data.billboard.name
        })
      },
      musicOn(event,index){
        this.songid = event.currentTarget.getAttribute('id');
        this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid='+this.songid+'',{
          type:'jsonp',
          jsonp:'callback'
        }).then(function(res){
          this.audioSrc = res.body.bitrate.file_link;
          this.songs[0].title = res.body.songinfo.album_title;
          this.songs[0].author = res.body.songinfo.author;
          this.flag = true;
        })
      },
      download(event){
        this.songid = event.currentTarget.getAttribute('id');
        this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.playAAC&songid='+this.songid+'',{
          type:'jsonp',
          jsonp:'callback'
        }).then(function(res){
          window.open(res.body.bitrate.file_link);
        })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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

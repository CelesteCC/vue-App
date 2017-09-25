<template>
  <div class="main">
    <div class="content">
      <audio id="audio" :src="audioSrc"></audio>
      <!--<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=483671599&auto=1&height=66"></iframe>-->
      <div class="audio_top">
        <div class="audio_top_back iconfont icon-back" @click="$router.go(-1)"></div>
        <div class="audio_top_name">
          <p class="audio_top_musicname">光年之外</p>
          <p class="audio_top_musicartist">邓紫棋</p>
        </div>
        <div class="audio_top_download iconfont icon-xiazai"></div>
      </div>
      <div class="audio_pic">
        <div class="audio_pic_img" :class="flag?music_on:''"><img src="../assets/music_hot.jpg" alt=""/></div>
        <div class="audio_pic_lry"></div>
      </div>
      <div class="audio_play">
        <div class="audio_bar">
          <span>{{curTime}}</span>
          <p><i :style="{width:barWidth+'%'}"><em></em></i></p>
          <span>{{duration}}</span>
        </div>
        <div class="audio_btn">
          <span class="iconfont icon-shangyiqu"></span>
          <span class="iconfont icon-yinlebofang" :class="flag?music_on:''" @click="musicPlay()"></span>
          <span class="iconfont icon-shangyiqu1"></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data (){
    return {
      liric: '',
      flag: false,
      music_on: 'music_on',
      audioPic: '',
      audioSrc:'',
      barWidth: 0,
      curTime:'00:00',
      duration:''
    }
  },
  created(){
    /*this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.play&songid=554926752',{
     type:'jsonp',
     jsonp:'callback'
     }).then(function(res){
     this.audioSrc = res.body.bitrate.file_link;
     var self = this;
     self.duration = '0' + ''+(res.body.bitrate.file_duration/60).toFixed(2)+''
     console.log(res)
     })*/

    this.$http.get('https://api.imjad.cn/cloudmusic/?type=lyric&id=449818741').then(
      function(res){
        console.log(res)
      });

    this.$http.get('http://musicapi.duapp.com/api.php?type=url&id=449818741').then(
      function(res){
        console.log(res)
      });
  },
  mounted(){
    this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id=449818741&br=128000').then(
      function(res){
        console.log(res)
        this.audioSrc = res.body.data[0].url;
      });
    let audio = document.getElementById('audio');
    var self = this;
    //self.duration = '0' + ''+(audio.duration/60).toFixed(2)+''
    setTimeout(function(){
      self.duration = '0' + ''+(audio.duration/60).toFixed(2)+''
      console.log(audio.duration)
    },600)
  },
  methods:{
    musicPlay(){
      let audio = document.getElementById('audio');
      let timerID = null;
      clearInterval(timerID);
      if(!this.flag){
        audio.play();
        this.flag = true;
        timerID = setInterval(test, 100);
        let self = this;
        function test(){
          if(self.barWidth>=100){
            return false;
          }
          self.barWidth = (audio.currentTime/60)/(audio.duration/60)*100;
          self.curTime = (audio.currentTime/60).toFixed(2);
          if(self.curTime<10){
            self.curTime = '0'+''+(audio.currentTime/60).toFixed(2)+'';
          }
        }
      }else {
        audio.pause();
        this.flag = false;
        clearInterval(timerID);
      }
    }
  }
  }
</script>

<style lang="scss">
  $height:1.2rem;
  .content{
    height: 100%;
    background: -webkit-radial-gradient(#7ef0ad, #34de7b);
    background: -o-radial-gradient(#7ef0ad, #34de7b);
    background: -moz-radial-gradient(#7ef0ad, #34de7b);
    background: radial-gradient(#7ef0ad, #34de7b);
    padding: 1.2rem 0 1.6rem;
  }
  .audio_top{
    height: $height;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -$height;
  .audio_top_back{
    flex: 1;
    height: 100%;
    line-height: $height;
    font-size: 0.38rem;
    color: #fff;
  }
  .audio_top_name{
    flex: 5;
    height: 100%;
    text-align:left;
    display:flex;
    justify-content: center;
    flex-direction: column;
  .audio_top_musicname{
    font-size: 0.32rem;
    color: #fff;
  }
  .audio_top_musicartist{
    font-size: 0.28rem;
    color: #fff;
  }
  }
  .audio_top_download{
    flex: 1;
    height: 100%;
    color: #fff;
    font-size: 0.42rem;
    line-height: $height;
  }
  }
  .audio_pic{
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  .audio_pic_img{
    height: $height*3;
    width: $height*3;
    border-radius: 50%;
    border: 2px solid #fff;
    overflow:hidden;
  img{
    width: 100%;
    height: 100%;
  }
  }
  .audio_pic_lry{
    height: 4rem;
    width: 100%;
  }
  }
  .audio_bar{
    height: 0.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
  span{
    flex: 1;
    font-size: 0.24rem;
  }
  p{
    flex: 5;
    height: 0.08rem;
    background: #fff;
    border-radius: 0.4rem;
  i{
    display: block;
    width: 0;
    background: #ccc;
    height: 100%;
    position: relative;
    border-radius:0.4rem;
  em{
    position: absolute;
    width: 0.20rem;
    height: 0.20rem;
    border-radius: 50%;
    background: #fff;
    right: -0.1rem;
    top: -0.06rem;
  }
  }
  }
  }
  .audio_btn{
    height: $height;
    display: flex;
    align-items: center;
    justify-content: center;
  span{
    width: 1.6rem;
    font-size: 0.6rem;
    color: #fff;
  }
  .icon-yinlebofang{
    font-weight: bold;
  :before{
    display: inline-block;
  }
  }

  }
  .music_on{
    animation: on 3s linear infinite;
  }

  @keyframes on {
  0{
    transform: rotate(0);
  }
  100%{
    transform: rotate(360deg);
  }
  }
</style>

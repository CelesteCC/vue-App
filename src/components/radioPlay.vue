<template>
  <div class="main">
    <div class="content radio">
      <audio id="audio" :src="audioSrc"></audio>
      <div class="audio_top">
        <div class="audio_top_back iconfont icon-back" @click="$router.go(-1)"></div>
        <div class="audio_top_name">
          <p class="audio_top_musicname">{{mName}}</p>
          <p class="audio_top_musicartist">{{singerName}}</p>
        </div>
        <div class="audio_top_download iconfont icon-xiazai"></div>
      </div>
      <div class="audio_pic">
        <div class="audio_pic_img" :class="flag?music_on:''"><img src="../assets/music_hot.jpg" alt=""/></div>
        <div class="audio_pic_lry"><p v-for="(key,value,index) in lyric">{{ key }}</p></div>
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
    name: 'radioPlay',
    data (){
    return {
      lyric: {},
      flag: false,
      music_on: 'music_on',
      audioPic: '',
      audioSrc:'',
      barWidth: 0,
      curTime:'00:00',
      duration:'',
      mName:'',
      singerName:''
    }
  },
  created(){
    this.$http.get('https://api.imjad.cn/cloudmusic/?type=lyric&id=449818741').then(
      function(res){
        this.lyric = res.data.lrc.lyric.split('[');
        for(var i = 1;i<this.lyric.length;i++){
          this.lyric[i] = this.lyric[i].split("]")[1]
        }
        console.log()
      });

    this.$http.get('http://musicapi.duapp.com/api.php?type=url&id=449818741').then(
      function(res){
        //console.log(res)
      });
  },
  mounted(){
    this.$http.get('https://api.imjad.cn/cloudmusic/?type=song&id='+ this.$route.query.id+'&br=128000').then(
      function(res){
        //console.log(res)
        this.audioSrc = res.body.data[0].url;
      });
    let audio = document.getElementById('audio');
    var self = this;
    //self.duration = '0' + ''+(audio.duration/60).toFixed(2)+''
    setTimeout(function(){
      self.duration = '0' + ''+(audio.duration/60).toFixed(2)+''
      //console.log(audio.duration)
    },600)
  },
  methods:{
    /*musicPlay(){
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
    }*/
  }
  }
</script>

<style lang="scss">

</style>

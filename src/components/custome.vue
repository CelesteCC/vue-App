<template>
  <div class="main">
    <div class="content">
      <!--<audio src="https://m7.music.126.net/20170919180710/b41062302bdccaaf5c201bddad802844/ymusic/1606/426f/10a6/a01cace34f2df73c384bbcfe3e30b827.mp3" autoplay controls="controls"></audio>-->
      <div class="audio_top">
        <div class=""></div>
        <div class=""></div>
      </div>
      <div class="audio_pic">{{liric}}</div>
      <div class="audio_play"></div>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data () {
      return {
        liric:''
      }
    },
    created(){
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.lry&songid=554926752',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
//        res.data["imgsrc"]=_self.imgsrc[i];  //将图片插入到数组中
        //this.$set('msg',res.data.song_list)
        this.liric = res.body.lrcContent
        //console.log(res.data.song_list)
      }, function(res){
        console.log('加载失败了...')
      })

    }
  }
</script>

<style lang="scss">
  .content{
    height: 100%;
  }
  .audio_top{}
</style>

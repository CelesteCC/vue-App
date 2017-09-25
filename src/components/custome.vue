<template>
  <div class="main plr40">
    <div class="singer_item" v-for="items in singer">
      <div class="singer_img"><img :src="items.avatar_small" alt=""></div>
      <p class="singer_name">{{items.name}}</p>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data (){
    return {
      singer:[]
    }
  },
  created(){

  },
  mounted(){
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&order=1&offset=0&limit=50',{
      type:'jsonp',
      jsonp:'callback'
    }).then(function(res){
      this.singer = res.data.artist;
      //console.log(this.singer)
    })
  },
  methods:{

  }
}
</script>

<style lang="scss">

</style>

<template>
  <div class="main"></div>
</template>
<script>
  export default {
    name: 'app',
    data (){
    return {

    }
  },
  created(){

  },
  mounted(){
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&order=1&offset=0&limit=50',{
      type:'jsonp',
      jsonp:'callback'
    }).then(function(res){
      console.log(res.data)
    })
  },
  methods:{

  }
}
</script>

<style lang="scss">

</style>

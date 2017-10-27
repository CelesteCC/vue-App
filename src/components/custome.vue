<template>
  <div class="main plr40">
    <div class="singer_sex"><i>性别：</i><p><span @click="getBoy('gender',0)">男歌手</span><span @click="getBoy('gender',1)">女歌手</span><span @click="getBoy('gender',2)">组合</span></p></div>
    <div class="singer_sex"><i>字母：</i><p><span @click="getBoy('firstchar',items)" v-for="items in chartCode">{{ items }}</span></p></div>
    <div class="singer_item" v-for="items in singer">
      <router-link :to="{path:'/singer', query:{id:items.ting_uid}}">
        <div class="singer_img"><img :src="items.avatar_small" alt=""></div>
        <p class="singer_name">{{items.name}}</p>
      </router-link>

    </div>
    <p v-if="singer.length==0">暂无任何信息</p>
  </div>
</template>
<script>
  export default {
    name: 'app',
    data (){
    return {
      singer:[],
      chartCode:[]
    }
  },
  created(){

  },
  mounted(){
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&order=1&offset=0&limit=40',{
      type:'jsonp',
      jsonp:'callback'
    }).then(function(res){
      this.singer = res.data.artist;
      console.log(res)
    });
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.getinfo&tinguid=7994',{
      type:'jsonp',
      jsonp:'callback'
    }).then(function(res){
      //console.log(res)
    });
    for(let i=0;i<26;i++){
      this.chartCode.push(String.fromCharCode(65+i));//输出A-Z  26个大写字母
    }
  },
  methods:{
    getBoy(typ,genderNum){
      var newArr = [];
      this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.artist.get72HotArtist&order=1&offset=0&limit=40',{
        type:'jsonp',
        jsonp:'callback'
      }).then(function(res){
        var resData =  res.data.artist;
        for(var i = 0;i<resData.length;i++){
          switch (typ){
            case 'gender':
            if(resData[i].gender == genderNum){
              newArr.push(resData[i]);
            }
            break;
          case 'firstchar':
            if(resData[i].firstchar == genderNum){
              newArr.push(resData[i]);
            }
            break;
          }
        }
      });
      this.singer = newArr;
      console.log(this.singer.length)
    }
  }
}
</script>

<style lang="scss">
  .singer_sex{text-align: left;padding: 0.2rem 0;word-break: break-word;display: flex;}
  .singer_sex i{flex: 1;font-style: normal;padding: 0.1rem 0;}
  .singer_sex p{flex: 6}
  .singer_sex span{padding: 0.1rem 0.4rem;display: inline-block}
</style>

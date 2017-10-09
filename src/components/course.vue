<template>
  <div class="main">
    <p class="album_tit"><span>新歌速递</span><router-link to=""></router-link></p>
    <ul class="m_list">
      <li v-for="items in album">
        <router-link to=""><!--  :to="{path:'/musicList', query: { type: item.getType }}" -->
          <div class="m_list_img"><img :src="items.avatar_s300" alt=""/><p><span class="iconfont"></span>{{items.listen_nums}}万</p></div>
          <p>{{items.album_title}} <br> {{items.author}}</p>
        </router-link>
      </li>
    </ul>
    <p class="album_tit">新碟上架</p>
    <ul class="m_list">
      <li v-for="items in video">
        <router-link to="">
          <div class="m_list_img"><img :src="items.pic_radio" alt=""/><!--<p><span class="iconfont"></span>{{items.listen_nums}}万</p>--></div>
          <p>{{items.title}} <br> {{items.author}}</p>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      album:[],
      video:[]
    }
  },
  created(){
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.plaza.getNewSongs&limit=6',{
      type:'jsonp',
      jsonp:'callback',
      callback:'search_hot'
    }).then(function(res){
      this.album = res.data.song_list
    });
    this.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?from=qianqian&version=2.1.0&method=baidu.ting.plaza.getRecommendAlbum&offset=0&limit=6',{
      type:'jsonp',
      jsonp:'callback',
      callback:'search_hot'
    }).then(function(res){
      this.video = res.data.plaze_album_list.RM.album_list.list;
    });
  },
  methods:{

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>

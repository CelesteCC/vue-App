<template>
  <div class="main">
    <ul class="list">
      <li v-for="(item,index) in songlist" @click="num(index)">
        <router-link :to="{path:'/musicList', query: { type: item.getType }}">
          <div class="list_col"><span class="list_img"><img :src="item.imgsrc" alt=""/></span></div>
          <div class="list_col list_song"><p v-for="items in item.song_list">{{items.album_title}} - {{items.artist_name}}</p></div>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import pic01 from "../assets/music_new.jpg"
import pic02 from "../assets/music_hot.jpg"
import pic03 from "../assets/music_rock.jpg"
import pic04 from "../assets/music_oumei.jpg"
import pic05 from "../assets/music_couple.jpg"
import pic06 from "../assets/music_movie.jpg"
import pic07 from "../assets/music_net.jpg"
export default {
  name: 'hello',
  data () {
    return {
      hot:'',
      type:[1,2,11,21,23,24,25],
      songlist:[],
      imgsrc:[pic01,pic02,pic03,pic04,pic05,pic06,pic07],
      id:''
    }
  },
  created(){
      var _self=this;
      $.each(_self.type,function(i,n){
        //ajax方法
       /*$.ajax({
          type: "get",
          async: true,
          url: "http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type="+ n +"&size=3$offset=0",
          dataType: "jsonp",
          jsonp: "callback",
          scriptCharset: 'GBK',//设置编码，否则会乱码
          success: function(data) {
            data["imgsrc"]=_self.imgsrc[i];  //将图片插入到数组中
            _self.songlist.push(data);
            console.log(data)
          }
        });*/

        //vue-resource 方法
        _self.$http.jsonp('http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.billboard.billList&type='+ n +'&size=3$offset=0',{
          type:'jsonp',
          jsonp:'callback'
        }).then(function(res){
          res.data["imgsrc"]=_self.imgsrc[i];  //将图片插入到数组中
          res.data["getType"]=n;
          _self.songlist.push(res.data);
        }, function(res){
          console.log('加载失败了...')
        })
      })
  },
  methods:{
    num(index){
      this.id = this.type[index]    //获取type值
    }
  }
}

</script>

<style scoped lang="scss">
.con{height: 100%;}
.main{font-size: 0.24rem;height: 100%;overflow: auto;padding-top: 0.44rem;}
.list{margin: 0;padding: 0 0.2rem;list-style: none;}
.list li{position: relative;counter-reset: num;padding: 0.2rem 0;}
.list li a{display: table;width: 100%;table-layout: fixed}
.list li:after{content: '';position: absolute;height: 1px;background: #ccc;width: 100%;bottom: 0;left: 0;-webkit-transform: scaleY(.5);transform: scaleY(.5);}
.list li:last-child:after{content: normal;}
.list_col{display: table-cell;vertical-align: middle}
.list li .list_col:first-child{width: 1.92rem;}
.list_img{display: inline-block;width: 1.92rem;height: 1.92rem;position: relative;}
.list_img:after{content: '';position: absolute;width: 0.6rem;height: 0.6rem;background: url("../assets/play_icon.png") right bottom no-repeat;background-size: 100% auto;right: 0.15rem;bottom: 0.15rem;z-index: 1}
.list_img img{width: 100%;height: 100%;}
.list_song{padding: 0 0.2rem;width: 5.18rem;}
.list_song p{white-space: nowrap;overflow: hidden;text-overflow: ellipsis;font-size: 0.28rem;color: #333;text-align: left;padding: 6px 0;}
.list_song p:before{content: counter(num);counter-increment: num;color: #fa6644;margin-right: 0.15rem;}
</style>

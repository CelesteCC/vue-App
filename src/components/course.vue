<template>
  <div class="main">
    <img class="album_pic" src="" alt=""/>
    <div class="hello"></div>
  </div>
</template>


<script>
export default {
  name: 'app',
  data () {
    return {
      msg: '课程'
    }
  },
  created(){
      $.ajax({
        type: "get",
        async: true,
        url: "http://tingapi.ting.baidu.com/v1/restserver/ting?size=20&type=2&callback=cb_list&_t=1468380543284&format=json&method=baidu.ting.billboard.billList",
        dataType: "jsonp",
        jsonp: "callback",
        scriptCharset: 'GBK',//设置编码，否则会乱码
        success: function(data) {
          console.log(data)
        }
      });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.main{font-size: 0.24rem;}
</style>

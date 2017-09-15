<template>
  <div class="main">
    <v-header></v-header>
    <div class="content">
      <div class="box">
        <div class="box_item ptb20">
          <span class="box_l">修改头像</span>
          <div class="box_r"><div class="fix_head"><input type="file"/><img src="../assets/default_head.png" alt=""/></div></div>
        </div>
      </div>
      <div class="box mt_10">
        <div class="box_item ptb40">
          <span class="box_l">昵称</span>
          <span class="box_r">fenbid-A</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l">用户名</span>
          <span class="box_r">421084199301208383</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l"><span class="red">*</span>真实姓名</span>
          <span class="box_r">刘鑫</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l"><span class="red">*</span>身份证号</span>
          <span class="box_r">421084199301208383</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l"><span class="red">*</span>手机号码</span>
          <span class="box_r">13278823123</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l">职业信息</span>
          <span class="box_r">无</span>
        </div>
        <div class="box_item ptb40">
          <span class="box_l">个人简介</span>
          <span class="box_r">未填写</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import header from "./header.vue"
export default {
  name: 'footer',
  components:{
    "v-header":header
  },
  data () {
    return {
      msg: '这是网站底部'
    }
  }
}
</script>
<style scoped>
.content{
  background: #f7f7f7 url("../assets/title_bg.png") no-repeat center top;
  height:100%;
  background-size: 100% auto;
  padding: 1.28rem 0.2rem 0;
  text-align: center;
  color: #fff;
}
.box{background: #fff;border-radius: 0.2rem;padding-left: 0.37rem;padding-right: 0.37rem;}
.box_item{
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.box_item:after{
  content: '';
  position: absolute;
  width: 100%;
  height: 1px;
  background: #e9e9e9;
  transform: scaleY(.5);
  bottom: 0;
  left: 0;
}
.box_item:last-child:after{
  content: normal;
}
.box_l{
  flex: 1;
  font-size: 0.3rem;
  color: #222;
  text-align: left;
}
.box_r{
  flex: 2;
  text-align: right;
  font-size: 0.26rem;
  color: #666;
}
.ptb20{padding-top: 0.2rem;padding-bottom: 0.2rem;}
.ptb40{padding-top: 0.4rem;padding-bottom: 0.4rem;}
.fix_head{
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  position: relative;
  display: inline-block;
}
.fix_head input{
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
}
.fix_head img{
  width: 100%;
  height: 100%;
}
.mt_10{
  margin-top: 0.1rem;;
}
.red{
  color: #fc2113;
}
</style>

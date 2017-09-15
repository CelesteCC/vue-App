<template>
  <div class="head">
    <span class="head_left icon_back" @click="$router.go(-1)"></span>
    <p>个人中心</p>
    <span class="head_right">保存</span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: '这是网站头部'
    }
  }
}
</script>

<style>
.head{
  height: 0.84rem;
  position: absolute;
  top: 0.44rem;
  left: 0;
  width: 100%;
  line-height: 0.84rem;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
}
.head_left{
  position: absolute;
  top: 0;
  left: 0;
  width: 1rem;
  height: 100%;
}
.head_right{
  position: absolute;
  top: 0;
  right: 0;
  width: 1.28rem;
  height: 100%;
  text-align: center;
  font-size: 0.28rem;
}
.icon_back{
  background: url("../assets/back.png") center center no-repeat;
  background-size: 0.2rem auto;
}
</style>

<template>
  <div class="head">
    <span class="head_left icon_back" @click="$router.go(-1)"></span>
    <p>{{ title }}</p>
    <span class="head_right"></span>
  </div>
</template>

<script>
export default {
  name: 'hello',
  props:{
    title:String
  },
  data () {
    return {
      msg: '这是网站头部'
    }
  }
}
</script>

<style>
.head{
  height: 1.24rem;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  line-height: 0.84rem;
  text-align: center;
  font-size: 0.36rem;
  color: #fff;
  padding-top: 0.44rem;
  background: #73129a;
  z-index: 20;
}
.head_left{
  position: absolute;
  top: 0.44rem;
  left: 0;
  width: 1rem;
  height: 0.84rem;
}
.head_right{
  position: absolute;
  top: 0.44rem;
  right: 0;
  width: 1.28rem;
  height: 0.84rem;
  text-align: center;
  font-size: 0.28rem;
}
.icon_back{
  background: url("../assets/back.png") center center no-repeat;
  background-size: 0.2rem auto;
}
</style>

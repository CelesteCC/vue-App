<template>
  <div class="head">
    <span class="head_left iconfont icon-back" @click="$router.go(-1)"></span>
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

</style>

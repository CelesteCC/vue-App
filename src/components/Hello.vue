<template>
  <div class="hello pt">
    <div class="top_bar">
      <div class="top_l_action iconfont icon-search"></div>
      <ul class="tab">
        <li><router-link to="/course"><span class="iconfont icon-yinle"></span></router-link></li>
        <li><router-link to="/"><span class="iconfont icon-yinpingedan"></span></router-link></li>
        <li><router-link to="/custome"><span class="iconfont icon-user"></span></router-link></li>
        <!--<li><router-link to="/mine"><span class="tab_icon tab_icon04"></span>我的</router-link></li>-->
      </ul>
      <div class="top_l_action iconfont icon-search"></div>
    </div>
    <div class="main_view"><router-view></router-view></div>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>

</style>

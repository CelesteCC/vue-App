<template>
  <div class="hello pt">
    <div class="top_bar">
      <div class="top_l_action iconfont icon-search"></div>
      <ul class="tab">
        <li><router-link to="/"><span class="iconfont icon-tingyinle"></span></router-link></li>
        <li><router-link to="/index"><span class="iconfont icon-yinpingedan"></span></router-link></li>
        <li><router-link to="/custome"><span class="iconfont icon-mianxingtubiao1yinlediantai" style="font-size: 0.6rem"></span></router-link></li>
        <!--<li><router-link to="/mine"><span class="tab_icon tab_icon04"></span></router-link></li>-->
      </ul>
      <div class="top_l_action iconfont icon-search"><router-link to="/search"></router-link></div>
    </div>
    <div class="main_view">
      <transition name="fade">
        <router-view></router-view>
      </transition>
    </div>
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
<style>
  .fade-enter-active {
    transition: all .3s ease;
    transform: translateY(10px);
  }
  .fade-leave-active {
    transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .fade-enter{
    transform: translateY(0);
  }
 .fade-leave-to{
    transform: translateY(0);
    opacity: 0;
  }
</style>

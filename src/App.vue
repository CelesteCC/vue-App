<template>
  <div id="app">
    <div class="con"><router-view></router-view></div>
  </div>
</template>

<script>
var html = document.documentElement;
var hWidth = html.getBoundingClientRect().width;
html.style.fontSize = hWidth/7.5 + 'px';
export default {
  name: 'app',
  data ()
  {
    return {
      transitionName: 'slide-left'
    }
  },
  watch: {
    '$route' (to, from) {
      if(to.path != '/'){
        this.transitionName = 'slide-right';
      }else{
        this.transitionName = 'slide-left';
      }
    }
  }
}
</script>

<style lang="scss">
@import "assets/css/reset.scss";
@import "assets/fonts/iconfont.css";
.tab_icon01{background: url(./assets/nav_icon01.png);background-size: 0.44rem auto;}
.tab_icon02{background: url(./assets/nav_icon02.png);background-size: 0.44rem auto;}
.tab_icon03{background: url(./assets/nav_icon03.png);background-size: 0.44rem auto;}
.tab_icon04{background: url(./assets/nav_icon04.png);background-size: 0.44rem auto;}
</style>

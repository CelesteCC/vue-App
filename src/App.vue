<template>
  <div id="app">
    <div class="con"><router-view></router-view></div>
  </div>
</template>

<script>
  setFont();
  window.onresize = function(){
    setFont();
  };

  function setFont(){
    var html = document.documentElement;
    var hWidth = html.getBoundingClientRect().width;
    html.style.fontSize = hWidth/7.5 + 'px';
  }
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

</style>

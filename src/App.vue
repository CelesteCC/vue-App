<template>
  <div id="app">
    <div class="con"><router-view class="child-view"></router-view></div>
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

<style>
@import "assets/css/reset.css";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  width: 7.5rem;
}
.pb{padding-bottom: 0.9rem;}
.tab{
  padding: 0;
  margin: 0;
  list-style: none;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  position: relative;
}
.tab:before{
  content: '';
  position: absolute;
  height: 1px;
  background: #ebebeb;
  width: 100%;
  left: 0;
  top: 0;
  -webkit-transform: scaleY(0.5);
  transform: scaleY(0.5);
}
.tab li{
  flex: 1;
  font-size: 0.24rem;
  text-decoration: none;
  align-items: center;
  justify-content: center
}
.tab li a{
  text-decoration: none;
  color: #b9c5d4;
}
.tab li a.router-link-exact-active.router-link-active{color: #39d0ff}
.tab li a.router-link-exact-active.router-link-active .tab_icon{background-position: center bottom;}
.tab_icon{display: block;width: 0.44rem;height: 0.44rem;margin: 0 auto;overflow: hidden;}
.tab_icon01{background: url(./assets/nav_icon01.png);background-size: 0.44rem auto;}
.tab_icon02{background: url(./assets/nav_icon02.png);background-size: 0.44rem auto;}
.tab_icon03{background: url(./assets/nav_icon03.png);background-size: 0.44rem auto;}
.tab_icon04{background: url(./assets/nav_icon04.png);background-size: 0.44rem auto;}
</style>

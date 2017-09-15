<template>
  <div class="hello pb">
    <div class="con"><transition :name="transitionName"><router-view class="child-view"></router-view></transition></div>
    <ul class="tab">
      <li><router-link to="/"><span class="tab_icon tab_icon01"></span>首页</router-link></li>
      <li><router-link to="/course"><span class="tab_icon tab_icon02"></span>课程</router-link></li>
      <li><router-link to="/custome"><span class="tab_icon tab_icon03"></span>客户档案</router-link></li>
      <li><router-link to="/mine"><span class="tab_icon tab_icon04"></span>我的</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'hello',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      transitionName: 'slide-left'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .con{height: 100%;overflow: hidden}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s ease;
}
.fade-enter, .fade-leave-active {
  opacity: 0
}
.child-view {
  position: absolute;
  top: 0;
  bottom: 0.9rem;
  transition: all .5s cubic-bezier(.55,0,.1,1);
}
.slide-left-enter, .slide-right-leave-active {
  opacity: 0;
  -webkit-transform: translate(30px, 0);
  transform: translate(30px, 0);
}
.slide-left-leave-active, .slide-right-enter {
  opacity: 0;
  -webkit-transform: translate(-30px, 0);
  transform: translate(-30px, 0);
}
.main{
  position: relative;
  font-size: 0.28rem;
  height: 100%;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
.hello{
    height: 100%;
    width: 100%;
}
</style>

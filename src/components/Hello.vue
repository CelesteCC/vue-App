<template>
  <div class="hello pb">
    <div class="con"><router-view></router-view></div>
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
  .con{height: 100%;overflow-y: auto;}
</style>

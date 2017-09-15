
<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
    <h1>{{ msg }}</h1>
  </div>
</template>



<script>
  export default {
    name: 'app',
    data () {
    return {
      msg: '客户档案'
    }
  }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .main{font-size: 0.24rem;}
</style>

<template>
  <div id="app" class="container">
    <!--<img src="./assets/logo.png">-->
    <!--<div>-->
      <!--<router-link to="/">Hello</router-link>-->
      <!--<router-link to="/product" >Product</router-link>-->
    <!--</div>-->
      <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  @import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

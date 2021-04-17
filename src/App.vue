<template>
<!--  <img src="./assets/logo.png">-->
<!--  <div>-->
<!--    <p>-->
<!--      If Element Plus is successfully added to this project, you'll see an-->
<!--      <code v-text="'<el-button>'"></code>-->
<!--      below-->
<!--    </p>-->
<!--    <el-button type="primary">el-button</el-button>-->
<!--  </div>-->
<!--  <HelloWorld msg="Welcome to Your Vue.js App"/>-->

  <div id="app">
    <router-view></router-view>
  </div>

</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  // components: {
  //   HelloWorld
  // }
}
</script>

<style>

  @import "./assets/css/main.css";
  @import "./assets/css/color-dark.css";

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    //margin-top: 60px;
}
</style>

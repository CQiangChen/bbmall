<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <router-view name='test' />
    <!-- <router-view name='title2' /> -->
    <!-- 默认页面在index.js中可以看到设置为default：Goods -->
    <!-- title1、2两个页面，在index.js设置好后内容直接
    在同一页面，也就是index.js中自己设置的'/'这个地址下的页面中显示 -->

    <!-- 根据官网文档还有个叫做# 嵌套命名视图，
    其实就是嵌套路由和命名视图的结合 -->
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

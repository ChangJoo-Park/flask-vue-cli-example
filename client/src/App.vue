<template>
  <div id="app">
    <img src="./assets/logo.png">
    <ul>
      <router-link :to="{ name: 'Hello' }">Hello</router-link>
      <router-link :to="{ name: 'Main' }">Main</router-link>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
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

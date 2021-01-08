<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your Vue.js App" />
    <button></button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import XLSX from 'XLSX'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
html {
  background: #00000018;
}
</style>

<template>
  <div id="app">
    <div class="loading">
      <!-- <img src="@/assets/loading_pikaqiu.gif" alt=""> -->
    </div>
    <router-view />
  </div>
</template>
<script>
// import logo from '@/assets/loading_pikaqiu.gif'
import router from ''
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.loading {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 99;
  background: rgba(0, 0, 0, 0.3);
}
</style>

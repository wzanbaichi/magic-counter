<template>
  <div id="app">
    <div class="loading">
      <img class="loading_pikaqiu" src="@/assets/loading_pikaqiu.gif">
      <p>正在处理中了...不要催了</p>
    </div>
    <router-view />
  </div>
</template>
<script>
export default {
  name: 'App'
}
</script>

<style lang="scss">
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
  
  .loading_pikaqiu {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    width: 200px;
  }
}
</style>

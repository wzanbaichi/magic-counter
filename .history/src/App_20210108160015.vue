<template>
  <div id="app">
    <div class="loading">
      <div class="loading_info">
        <img
          class="loading_pikaqiu"
          src="@/assets/loading_pikaqiu.gif"
        >
        <p>正在处理中了...</p>
      </div>
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
  background: rgba(0, 0, 0, 0.4);
  
  .loading_info {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50% , -50%);
    text-align: center;
    
    .loading_pikaqiu {
      width: 180px;
    }
    
    p {
      color: rgba(0,0,0,;
    }
  }
}
</style>

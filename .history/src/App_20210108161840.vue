<template>
  <div id="app">
    <div
      v-if="loading"
      class="loading"
    >
      <div class="loading_info">
        <img
          class="loading_pikaqiu"
          src="@/assets/loading_pikaqiu.gif"
        >
        <p>{{ loadingText }}</p>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import loadingPic from '@'
export default {
  name: 'App',
  computed: {
    loading() {
      return this.$store.state.app.loading
    },
    loadingText() {
      return this.$store.state.app.loadingText
    }
  },
  mounted() {
    // this.$store.commit('app/TOGGLE_LOADING', { loading: true, loadingText: '启动中...' })
    // setTimeout(() => {
    //   this.$store.commit('app/TOGGLE_LOADING', { loading: false})
    // }, 1000)
  }
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
      z-index: 99;
    }
    
    p {
      color: rgba(0, 0 , 0, 0.6);
    }
  }
}
</style>

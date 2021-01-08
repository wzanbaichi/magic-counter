<template>
  <div id="app">
    <div
      v-show="loading"
      class="loading"
    >
      <div class="loading_info">
        <img
          class="loading_pikaqiu"
          :src="loadingPic"
        >
        <p>{{ loadingText }}</p>
      </div>
    </div>
    <router-view />
  </div>
</template>
<script>
import loadingPic from '@/assets/loading_pikaqiu.gif'
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
  data() {
    return {
      loadingPic
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss">
@font-face {font-family: 'iconfont';
  src: url('iconfont.eot');
  src: url('iconfont.eot?#iefix') format('embedded-opentype'),
  url('iconfont.woff') format('woff'),
  url('iconfont.ttf') format('truetype'),
  url('iconfont.svg#iconfont') format('svg');
}

.iconfont{
    font-family:"iconfont" !important;
    font-size:16px;font-style:normal;
    -webkit-font-smoothing: antialiased;
    -webkit-text-stroke-width: 0.2px;
    -moz-osx-font-smoothing: grayscale;
}
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
      color: rgba(255, 255 , 255, 0.6);
    }
  }
}
</style>

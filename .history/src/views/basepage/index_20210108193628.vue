<template>
  <div id="container">
    <div class="menu">
      <at-menu
        mode="vertical"
        :active-name="activeName"
      >
        <at-menu-item name="Homepage"><i class="icon icon-home"></i>首页</at-menu-item>
        <div v-if="fileFigureOut">
          <at-menu-item name="te"><i class="icon icon-bar-chart-2"></i>概况统计</at-menu-item>
          <at-menu-item name="3"><i class="icon icon-award"></i>业绩统计</at-menu-item>
          <at-menu-item name="4"><i class="icon icon-pie-chart"></i>资源分析</at-menu-item>
        </div>
      </at-menu>
      <div class="copy-right">© code by lck</div>
    </div>
    <div class="content">
      <component :is="activeName"></component>
    </div>
  </div>
</template>
<script>
import Homepage from './components/homepage'
export default {
  name: 'BasePage',
  components: { Homepage },
  computed: {
    fileFigureOut() {
      return this.$store.state.app.fileFigureOut
    }
  },
  data() {
    return {
      activeName: 'Homepage',
    }
  },
  methods: {

  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
<template>
  <div id="container">
    <div class="menu">
      <at-menu
        mode="vertical"
        :active-name="activeName"
        @on-select="handleSelectMenu"
      >
        <at-menu-item name="Homepage"><i class="icon icon-home"></i>首页</at-menu-item>

        <at-menu-item
          v-if="fileFigureOut"
          name="GeneralSituation"
        ><i class="icon icon-bar-chart-2"></i>概况统计</at-menu-item>
        <at-menu-item
          v-if="fileFigureOut"
          name="Performance"
        ><i class="icon icon-award"></i>业绩统计</at-menu-item>
        <at-menu-item
          v-if="fileFigureOut"
          name="Resources"
        ><i class="icon icon-pie-chart"></i>资源分析</at-menu-item>
      </at-menu>
      <div class="copy-right">© code by lck</div>
    </div>
    <div class="content">
      <keep-alive>
        <component :is="activeName"></component>
      </keep-alive>
    </div>
  </div>
</template>
<script>
import Homepage from './components/homepage'
import Performance from './components/Performance'
import GeneralSituation from './components/GeneralSituation'
import Resources from './components/Resources'
export default {
  name: 'BasePage',
  components: {
    Homepage,
    Resources,
    GeneralSituation,
    Performance,
    Help
  },
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
    handleSelectMenu(menuName) {
      this.activeName = menuName
    }
  }
}
</script>
<style lang="scss" scoped>
@import './index.scss'
</style>
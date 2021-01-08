<template>
  <div id="container">
    <div class="menu">
      <at-menu
        mode="vertical"
        :active-name="activeName"
      >
        <at-menu-item name="1"><i class="icon icon-home"></i>首页</at-menu-item>
        <at-menu-item name="2"><i class="icon icon-bar-chart-2"></i>概况统计</at-menu-item>
        <at-menu-item name="3"><i class="icon icon-award"></i>业绩统计</at-menu-item>
        <at-menu-item name="4"><i class="icon icon-pie-chart"></i>资源分析</at-menu-item>
      </at-menu>
    </div>
    <div class="content">

    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
  name: 'BasePage',
  data() {
    return {
      activeName: '1'
    }
  },
  methods: {
    readFile(e) {
      function readWorkbookFromLocalFile(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = e.target.result;
          var workbook = XLSX.read(data, { type: 'binary' });
          console.log(workbook)
          if (callback) callback(workbook);
        };
        reader.readAsBinaryString(file);
      }
      readWorkbookFromLocalFile(e.target.files[0])
    }
  }
}
</script>
<style lang="scss" scoped>
@import ./index.scss'
</style>
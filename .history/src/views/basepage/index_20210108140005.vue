<template>
  <div>
    <at-menu
      mode="vertical"
      :active-name="activeName"
    >
      <at-menu-item name="1"><i class="icon icon-home"></i>首页</at-menu-item>
      <at-menu-item name="1"><i class="icon icon-home"></i>概况统计</at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i></at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i></at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i>退费数据</at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i>退费数据</at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i>退费数据</at-menu-item>
    </at-menu>
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
<template>
  <div>
    <at-menu
      mode="vertical"
      active-name="1"
    >
      <at-menu-item name="1"><i class="icon icon-home"></i>首页</at-menu-item>
      <at-menu-item name="4"><i class="icon icon-settings"></i>导航菜单四</at-menu-item>
    </at-menu>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
  name: 'BasePage',
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
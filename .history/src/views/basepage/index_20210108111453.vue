<template>
  <div>
    <at-menu
      mode="vertical"
      active-name="1"
    >
      <at-menu-item name="1"><i class="icon icon-home"></i>导航菜单一</at-menu-item>
      <at-submenu>
        <template slot="title"><i class="icon icon-life-buoy"></i>导航菜单三 - 子菜单</template>
        <at-menu-item-group title="分组一">
          <at-menu-item name="3-1">子菜单一</at-menu-item>
          <at-menu-item
            name="3-2"
            disabled
          >子菜单二</at-menu-item>
        </at-menu-item-group>
        <at-menu-item-group title="分组二">
          <at-menu-item name="3-3">子菜单三</at-menu-item>
          <at-menu-item name="3-4">子菜单四</at-menu-item>
        </at-menu-item-group>
      </at-submenu>
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
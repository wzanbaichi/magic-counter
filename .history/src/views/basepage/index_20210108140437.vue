<template>
  <div>
    
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
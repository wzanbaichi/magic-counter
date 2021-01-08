<template>
  <div>
    <div class="upload">
      <at-button
        type="primary"
        @click="handleUploadFiles"
      >上传文件</at-button>
      <p class="tips">点击按钮上传文件，请上传正确的xlsx文件！</p>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
  name: 'HomePage',
  methods: {
    handleUploadFiles() {
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
}
</script>
<style lang="scss" scoped>
  .upload {
    display: flex;
    align-items: center;

    .tips {
      margin-left: 14px;
    }
  }
</style>
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
      const input = document.createElement('input')
      input.type = 'file'
      input.click()
      input.addEventListener('change',
        (e) => {
          const file = e.target.files[0]
          if (file.name.indexOf('.xlsx') === -1) {
            this.$Message.error('请上传正确的xlsx文件！')
            this.$Notify({
              title: '这里是标题',
              message: '这里是内容，文案~~~',
              type: type
            })
          }
          console.log(e.target.files)
        }
      )
      // function readWorkbookFromLocalFile(file, callback) {
      //   var reader = new FileReader();
      //   reader.onload = function (e) {
      //     var data = e.target.result;
      //     var workbook = XLSX.read(data, { type: 'binary' });
      //     console.log(workbook)
      //     if (callback) callback(workbook);
      //   };
      //   reader.readAsBinaryString(file);
      // }
      // readWorkbookFromLocalFile(e.target.files[0])
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
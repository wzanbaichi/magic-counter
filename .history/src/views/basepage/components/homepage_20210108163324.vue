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
  data() {
    return {
      fileInfo: {}
    }
  },
  methods: {
    handleUploadFiles() {
      const input = document.createElement('input')
      input.type = 'file'
      input.click()
      input.addEventListener('change',
        (e) => {
          const file = e.target.files[0]
          if (file.name.indexOf('.xlsx') === -1) {
            this.$Notify({
              title: '上传失败！',
              message: '请上传正确的xlsx文件！',
              type: 'error'
            })
            return
          }
          console.log(file)
          this.$store.commit('app/TOGGLE_LOADING', { loading: true })
          readWorkbookFromLocalFile(file,
            (bookData) => {
              this.$store.commit('app/TOGGLE_LOADING', { loading: false })
              console.log(bookData)
            }
          )
        }
      )
      function readWorkbookFromLocalFile(file, callback) {
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = e.target.result;
          var workbook = XLSX.read(data, { type: 'binary' });
          if (callback) callback(workbook);
        };
        reader.readAsBinaryString(file);
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
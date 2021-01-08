<template>
  <div class="homepage_container">
    <div class="upload">
      <at-button
        type="primary"
        @click="handleUploadFiles"
      >上传文件</at-button>
      <p class="tips">点击按钮上传文件，请上传正确的xlsx文件！</p>
    </div>
    <!-- v-if="fileInfo.name" -->
    <div class="file">
      <el-divider content-position="left">文件信息</el-divider>
      <p class="fileName">文件名：{{ fileInfo.name }}</p>
      <el-divider content-position="left">计算信息</el-divider>
      <div class="count_info_container">
        <div class="price">
          <at-input
            v-model.number="price"
            placeholder="请输入全年单价"
          >
            <template slot="prepend">
              <span>全年单价</span>
            </template>
          </at-input>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import XLSX from 'xlsx'
export default {
  name: 'HomePage',
  data() {
    return {
      fileInfo: {},
      price: 18140
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
          this.fileInfo = file
          this.$store.commit('app/TOGGLE_LOADING', { loading: true })
          this.$store.commit('app/TOGGLE_FILE_STATUS', true)
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
  .homepage_container {
    min-height: 100%;
  }

  .upload {
    display: flex;
    align-items: center;
    margin-bottom: 54px;

    .tips {
      margin-left: 14px;
    }
  }

  .fileName {
    margin-top: 54px;
    margin-bottom: 54px;
  }

  .count_info_container {
    margin-top: 54px;

    .price {
      width: 240px;
    }
  }
</style>
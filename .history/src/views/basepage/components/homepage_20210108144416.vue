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
export default {
  name: 'HomePage',
  methods: {
    handleUploadFiles() {
      
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
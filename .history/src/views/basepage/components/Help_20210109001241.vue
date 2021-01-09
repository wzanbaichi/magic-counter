<template>
  <div>
    <el-divider content-position="left">表格规范</el-divider>
    <h4 style=“margin-bottom: '14px'”>请严格执行以下表格规范，否则数据分析不准确。</h4>
    <p
      v-for="(value,key) in tableData"
      :key="key"
    >
      {{ `${key}：${value}` }}
    </p>
  </div>
</template>
<script>
export default {
  name: 'Help',
  data() {
    return {
      tableData: {
        C: '学员姓名',
        F: '一级渠道',
        G: '二级渠道',
        H: '三级渠道',
        J: '定金',
        K: '补全款',
        L: '全款',
        M: '转出金额',
        N: '转入金额',
        O: '退费金额',
        V: '全款日期',
        X: 'demo日期',
        Y: '预约人',
        Z: '签约人',
        AG: '口碑信息提供人'
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  /deep/th {
    text-align: center;
  }
</style>
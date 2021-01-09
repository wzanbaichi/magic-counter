<template>
  <div>
    <p v-for="(key,value) in tableData" :key="key">
      {{ `` }}
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
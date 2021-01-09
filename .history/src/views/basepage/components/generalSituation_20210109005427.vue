<template>
  <div>
    <at-card>
      <h4 slot="title">全款统计</h4>
      <div ref="chart">
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">退费金额</h4>
      <div>
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">实际收入</h4>
      <div>
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转出金额</h4>
      <div>
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转入金额</h4>
      <div>
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">连报统计</h4>
      <div>
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">当pay统计</h4>
      <div>
        Card Content
      </div>
    </at-card>
  </div>
</template>
<script>
export default {
  name: 'GeneralSituation',
  qkAndBqkData: {},
  computed: {
    monthDetailData() {
      return this.$store.state.app.monthDetailData
    },
    counterParams() {
      return this.$store.state.app.counterParams
    }
  },
  watch: {
    monthDetailData: {
      handler(newData) {
        this.countQkAndBqkData()
      },
      deep: true,
      immediate: true
    },
    counterParams: {
      handler(newData) {
        console.log(2)
        this.countQkAndBqkData()
      },
      deep: true
    }
  },
  mounted() {

  },
  methods: {
    /**
     * 计算全款及补全款数据
     */
    countQkAndBqkData() {
      const data = {}
      Object.keys(this.monthDetailData).forEach(
        month => {
          data[month] = {}
          data[month].qkAndBqk = []
          const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          this.monthDetailData[month].forEach(
            row => {
              if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {
                data[month].qkAndBqk.push(row)
              }
            }
          )
        }
      )
      console.log(data)
      let myChart = this.$echarts.init(this.$refs.chart)
      myChart.setOptions()
    }
  }
}
</script>
<style lang="scss" scoped>
  /deep/.at-card {
    margin-bottom: 24px;
  }
</style>
<template>
  <div>
    <at-card>
      <h4 slot="title">全款统计</h4>
      <div id="chart">
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
        this.$nextTick(
          () => {
            this.countQkAndBqkData()
          }
        )
      },
      deep: true,
      immediate: true
    }
    // counterParams: {
    //   handler(newData) {
    //     this.countQkAndBqkData()
    //   },
    //   deep: true
    // }
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
          data[month].qkAndBqk = []  //全款及补全款
          data[month].tuifeiData = [] //退费金额
          data[month].revenue = 0  //实际收入
          const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          this.monthDetailData[month].forEach(
            row => {
              //计算全款及补全款数据
              if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {
                data[month].qkAndBqk.push(row)
              }
              if (row.tfje) {
                data[month].tuifeiData.push(row)
              }
              data[month].revenue = data[month].revenue + parseFloat(row.bqk) || 0 + parseFloat(row.qk) || 0 - parseFloat(row.zcje) || 0 + parseFloat(row.zrje) || 0 - row.tfje || 0
            }
          )
        }
      )
      console.log(data)
      const xData = Object.keys(data)
      const yData = []
      xData.forEach(
        item => {
          yData.push(data[item].qkAndBqk.length)
        }
      )
      let sum = yData.reduce((prev, next, index, ary) => prev + next)
      let myChart = this.$echarts.init(document.getElementById('chart'))
      myChart.setOption(
        {
          title: {
            show: true,
            text: `全年共计：${sum}`
          },
          tooltip: {
            trigger: 'axis',
            axisPointer: {            // 坐标轴指示器，坐标轴触发有效
              type: 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
            },
            formatter: (params) => {
              const tooltips = `<span style="margin-right:5px;display:inline-block;width:10px;height:10px;border-radius:5px;background-color:#748EDE;"></span>${params[0].name}
              <br/>
              数量：${params[0].value}
              <br/>
              占比：${(params[0].value / sum * 100).toFixed(2)}%`
              return tooltips
            }
          },
          xAxis: {
            type: 'category',
            data: xData
          },
          yAxis: {
            type: 'value'
          },
          series: [{
            data: yData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            label: {
              show: true
            }
          }]
        }
      )
      window.onresize = () => {
        myChart.resize()
      }
    }
  }
}
</script>
<style lang="scss" scoped>
  /deep/.at-card {
    margin-bottom: 24px;
  }
  #chart {
    width: 100%;
    height: 300px;
  }
</style>
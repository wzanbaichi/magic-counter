<template>
  <div>
    <at-card :bodyStyle="{padding:'12px'}">
      <h4 slot="title">全款统计</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">退费金额</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart2"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">实际收入</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart3"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转出金额</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart4"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转入金额</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart5"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">连报统计</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart6"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">当pay统计</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计:{{ qkAndBqkSum }}</h4>
      <div
        id="chart7"
        class="chart"
      >
        Card Content
      </div>
    </at-card>
  </div>
</template>
<script>
export default {
  name: 'GeneralSituation',
  data() {
    return {
      grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%'
      },
      qkAndBqkSum: 0
    }
  },
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
          data[month].tfje = 0 //退费金额
          data[month].revenue = 0  //实际收入
          data[month].zcje = 0  //转出金额
          data[month].zrjr = 0  //转入金额
          data[month].lbtj = 0  //连报统计
          data[month].dptj = 0  //当pay统计
          const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          this.monthDetailData[month].forEach(
            row => {
              //计算全款及补全款数据
              if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {
                data[month].qkAndBqk.push(row)
              }
              data[month].tfje += Math.abs(row.tfje) || 0
              data[month].revenue += Math.abs(row.bqk) || 0 + Math.abs(row.qk) || 0 - Math.abs(row.zcje) || 0 + Math.abs(row.zrje) || 0 - Math.abs(row.tfje) || 0
              data[month].zcje += Math.abs(row.zcje) || 0
              data[month].zrjr += Math.abs(row.zrjr) || 0
            }
          )
        }
      )
      console.log(data)
      const xData = Object.keys(data)
      const qkAndBqkData = []
      const tfjeData = []
      const revenueData = []
      const zcjeData = []
      const zrjrData = []
      xData.forEach(
        item => {
          qkAndBqkData.push(data[item].qkAndBqk.length)
          tfjeData.push(data[item].tfje)
          revenueData.push(data[item].revenue)
          zcjeData.push(data[item].zcje)
          zrjrData.push(data[item].zrjr)
        }
      )
      console.log(revenueData)
      this.qkAndBqkSum = qkAndBqkData.reduce((prev, next, index, ary) => prev + next)
      this.tfjeSum = qkAndBqkData.reduce((prev, next, index, ary) => prev + next)
      this.revenueSum = qkAndBqkData.reduce((prev, next, index, ary) => prev + next)
      this.qkAndBqkSum = qkAndBqkData.reduce((prev, next, index, ary) => prev + next)
      this.qkAndBqkSum = qkAndBqkData.reduce((prev, next, index, ary) => prev + next)
      let myChart = this.$echarts.init(document.getElementById('chart'))
      myChart.setOption(
        {
          grid: this.grid,
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
              占比：${(params[0].value / this.qkAndBqkSum * 100).toFixed(2)}%`
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
            data: qkAndBqkData,
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
      let myChart2 = this.$echarts.init(document.getElementById('chart2'))
      myChart2.setOption(
        {
          grid: this.grid,
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
              占比：${(params[0].value / this.qkAndBqkSum * 100).toFixed(2)}%`
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
            data: tfjeData,
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
      let myChart3 = this.$echarts.init(document.getElementById('chart3'))
      myChart3.setOption(
        {
          grid: this.grid,
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
              占比：${(params[0].value / this.qkAndBqkSum * 100).toFixed(2)}%`
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
            data: revenueData,
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
      let myChart4 = this.$echarts.init(document.getElementById('chart4'))
      myChart4.setOption(
        {
          grid: this.grid,
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
              占比：${(params[0].value / this.qkAndBqkSum * 100).toFixed(2)}%`
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
            data: zcjeData,
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
      let myChart5 = this.$echarts.init(document.getElementById('chart5'))
      myChart5.setOption(
        {
          grid: this.grid,
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
              占比：${(params[0].value / this.qkAndBqkSum * 100).toFixed(2)}%`
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
            data: zrjrData,
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
  .chart {
    width: 100%;
    height: 200px;
  }
</style>
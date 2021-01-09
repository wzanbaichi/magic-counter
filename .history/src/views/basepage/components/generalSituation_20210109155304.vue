<template>
  <div>
    <at-card :bodyStyle="{padding:'12px'}">
      <h4 slot="title">全款统计</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计：{{ qkAndBqkSum }}</h4>
      <div
        id="chart"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">退费金额</h4>
      <h4
        v-if="tfjeSum"
        slot="extra"
      >全年共计：{{ tfjeSum }}</h4>
      <div
        id="chart2"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">实际收入</h4>
      <h4
        v-if="revenueSum"
        slot="extra"
      >全年共计：{{ revenueSum }}</h4>
      <div
        id="chart3"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转出金额</h4>
      <h4
        v-if="zcjeSum"
        slot="extra"
      >全年共计：{{ zcjeSum }}</h4>
      <div
        id="chart4"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">转入金额</h4>
      <h4
        v-if="zrjeSum"
        slot="extra"
      >全年共计：{{ zrjeSum }}</h4>
      <div
        id="chart5"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">连报统计</h4>
      <h4
        v-if="lbtjSum"
        slot="extra"
      >全年共计：{{ lbtjSum }}</h4>
      <div
        id="chart6"
        class="chart"
      >
      </div>
    </at-card>
    <at-card>
      <h4 slot="title">当pay统计</h4>
      <h4
        v-if="qkAndBqkSum"
        slot="extra"
      >全年共计：{{ qkAndBqkSum }}</h4>
      <div
        id="chart7"
        class="chart"
      >
      </div>
    </at-card>
  </div>
</template>
<script>
import { add } from '@/utils'
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
      qkAndBqkSum: 0,
      tfjeSum: 0,
      revenueSum: 0,
      zcjeSum: 0,
      zrjeSum: 0,
      lbtjSum: 0
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
      handler() {
        this.$nextTick(
          () => {
            this.counterDataAndInitCharts()
          }
        )
      },
      deep: true,
      immediate: true
    }
    // counterParams: {
    //   handler(newData) {
    //     this.counterDataAndInitCharts()
    //   },
    //   deep: true
    // }
  },
  methods: {
    /**
     * 计算数据并且渲染图表
     */
    counterDataAndInitCharts() {
      const data = {}
      Object.keys(this.monthDetailData).forEach(
        month => {
          data[month] = {}
          data[month].qkAndBqk = []  //全款及补全款
          data[month].tfje = 0 //退费金额
          data[month].revenue = 0  //实际收入
          data[month].zcje = 0  //转出金额
          data[month].zrje = 0  //转入金额
          data[month].lbtj = 0  //连报统计
          data[month].dptj = 0  //当pay统计
          const currentMonthStudentName = []
          const dpData = {}
          const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          this.monthDetailData[month].forEach(
            row => {
              //计算全款及补全款数据
              if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {
                data[month].qkAndBqk.push(row)
                //计算连报统计数据
                if (currentMonthStudentName.indexOf(row.name) === -1) {
                  currentMonthStudentName.push(row.name)
                  计算当pay数据
                  if (row.demoRq + 0 === row.qkrq) {
                  }
                } else if (!dpData[row.name]) {
                  dpData[row.name] = 1
                  data[month].lbtj += 1
                }
              }
              data[month].tfje += Math.abs(row.tfje) || 0
              data[month].revenue += Math.abs(row.bqk) || 0 + Math.abs(row.qk) || 0 - Math.abs(row.zcje) || 0 + Math.abs(row.zrje) || 0 - Math.abs(row.tfje) || 0
              data[month].zcje += Math.abs(row.zcje) || 0
              data[month].zrje += Math.abs(row.zrje) || 0
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
      const zrjeData = []
      const lbtjData = []
      xData.forEach(
        item => {
          qkAndBqkData.push(data[item].qkAndBqk.length)
          tfjeData.push(data[item].tfje)
          revenueData.push(data[item].revenue)
          zcjeData.push(data[item].zcje)
          zrjeData.push(data[item].zrje)
          lbtjData.push(data[item].lbtj)
        }
      )
      this.qkAndBqkSum = qkAndBqkData.reduce((prev, next) => add(prev, next))
      this.tfjeSum = tfjeData.reduce((prev, next) => add(prev, next))
      this.revenueSum = revenueData.reduce((prev, next) => add(prev, next))
      this.zcjeSum = zcjeData.reduce((prev, next) => add(prev, next))
      this.zrjeSum = zrjeData.reduce((prev, next) => add(prev, next))
      this.lbtjSum = lbtjData.reduce((prev, next) => add(prev, next))
      /**
       * 全款及补全款图表
       */
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
              show: true,
              position: 'top'
            }
          }]
        }
      )
      /**
       * 退费金额图表
       */
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
              金额：${params[0].value}
              <br/>
              占比：${(params[0].value / this.tfjeSum * 100).toFixed(2)}%`
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
              show: true,
              position: 'top'
            }
          }]
        }
      )
      /**
       * 实际收入图表
       */
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
              金额：${params[0].value}
              <br/>
              占比：${(params[0].value / this.revenueSum * 100).toFixed(2)}%`
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
              show: true,
              position: 'top',
              formatter: (params) => {
                if (params.value <= 0) {
                  return `{a|${params.value}}`
                } else {
                  return params.value
                }
              },
              rich: {
                a: {
                  color: 'red'
                }
              }
            }
          }]
        }
      )
      /**
       * 转出金额图表
       */
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
              金额：${params[0].value}
              <br/>
              占比：${(params[0].value / this.zcjeSum * 100).toFixed(2)}%`
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
              show: true,
              position: 'top'
            }
          }]
        }
      )
      /**
       * 转入金额图表
       */
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
              金额：${params[0].value}
              <br/>
              占比：${(params[0].value / this.zrjeSum * 100).toFixed(2)}%`
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
            data: zrjeData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            label: {
              show: true,
              position: 'top'
            }
          }]
        }
      )
      /**
       * 连报统计图表
       */
      let myChart6 = this.$echarts.init(document.getElementById('chart6'))
      myChart6.setOption(
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
              占比：${(params[0].value / this.lbtjSum * 100).toFixed(2)}%`
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
            data: lbtjData,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
              color: 'rgba(220, 220, 220, 0.8)'
            },
            label: {
              show: true,
              position: 'top'
            }
          }]
        }
      )
      window.onresize = () => {
        myChart.resize()
        myChart2.resize()
        myChart3.resize()
        myChart4.resize()
        myChart5.resize()
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
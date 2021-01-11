
<template>
  <div>
    yejiotngji
  </div>
</template>
<script>
export default {
  name: 'Performance',
  data() {
    return {
      grid: {
        left: '10%',
        right: '10%',
        top: '10%',
        bottom: '10%'
      },
      ccNameList: {}, //CC名字数据 列表
      ccData: {} //CC数据 JSON
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
            this.counterCCNameData()
            this.counterDataAndInitCharts()
          }
        )
      },
      deep: true,
      immediate: true
    },
    ccNameList: {
      handler(newData) {
        this.ccData = {}
        Object.keys(this.monthDetailData).forEach(
          month => {
            this.ccData[month] = []
            newData.forEach(
              cc => {
                this.ccData[month].push(
                  {
                    name: cc,
                    performance: 0
                  }
                )
              }
            )
          }
        )
      },
      deep: true
    }
  },
  methods: {
    /**
     * 计算每个月的CC列表
     */
    counterCCNameData() {
      const ccNameList = []
      Object.keys(this.monthDetailData).forEach(
        month => {
          // data[month] = {}
          // data[month].ccList = []
          const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          this.monthDetailData[month].forEach(
            row => {
              if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {
                if (row.yyr && row.yyr.indexOf('/') === -1) {
                  const yyr = row.yyr.trim()
                  if (!yyr) {
                    console.log(row.name)
                  }
                  if (ccNameList.indexOf(yyr) === -1 && yyr) {
                    ccNameList.push(yyr)
                  }
                } else if (row.yyr) {
                  const yyrList = row.yyr.split('/')
                  yyrList.forEach(
                    item => {
                      const yyr = item.trim()
                      if (!yyr) {
                        console.log(row.name)
                      }
                      if (ccNameList.indexOf(yyr) === -1 && yyr) {
                        ccNameList.push(yyr)
                      }
                    }
                  )
                }
                if (row.qyr && row.qyr.indexOf('/') === -1) {
                  const qyr = row.qyr.trim()
                  if (!qyr) {
                    console.log(row.name)
                  }
                  if (ccNameList.indexOf(qyr) === -1 && qyr) {
                    ccNameList.push(qyr)
                  }
                } else if (row.qyr) {
                  const qyrList = row.qyr.split('/')
                  qyrList.forEach(
                    item => {
                      const qyr = item.trim()
                      if (!qyr) {
                        console.log(row.name)
                      }
                      if (ccNameList.indexOf(qyr) === -1 && qyr) {
                        ccNameList.push(qyr)
                      }
                    }
                  )
                }
              }
            }
          )
        }
      )
      this.ccNameList = ccNameList
    },
    /**
     * 计算数据并且渲染图表
     */
    counterDataAndInitCharts() {
      const data = {}
      Object.keys(this.monthDetailData).forEach(
        month => {
          data[month] = {}
          data[month].ccPerformance = []
          // const currentMinPrice = this.counterParams.price - this.counterParams.couponData[month]
          // this.monthDetailData[month].forEach(
          //   row => {
          //     if (row.qk >= currentMinPrice || row.bqk >= currentMinPrice) {

          //     }
          //   }
          // )
        }
      )
    }
  }
}
</script>
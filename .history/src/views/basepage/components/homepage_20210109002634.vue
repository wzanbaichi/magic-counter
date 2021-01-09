<template>
  <div class="homepage_container">
    <div class="upload">
      <at-button
        type="primary"
        @click="handleUploadFiles"
      >上传文件</at-button>
      <p class="tips">点击按钮上传文件，请上传正确的xlsx文件！</p>
    </div>

    <div
      v-if="fileFigureOut"
      class="file"
    >
      <el-divider content-position="left">文件信息</el-divider>
      <p class="fileName">文件名：{{ fileInfo.name }}</p>
      <el-divider content-position="left">计算信息</el-divider>
      <div class="count_info_container">
        <div class="price">
          <div class="label">
            <svg-icon
              icon-class="jiage"
              class-name="price-svg"
            ></svg-icon>
            <p>全年单价： </p>
          </div>
          <at-input
            v-model.number="price"
            size="small"
            placeholder="请输入全年单价"
            class="price_input"
          >
          </at-input>
        </div>
        <div class="coupon">
          <div class="label">
            <svg-icon
              icon-class="youhui"
              class-name="price-svg"
            ></svg-icon>
            <p>优惠偏差： </p>
          </div>
          <div class="coupon_input_list">
            <div
              v-for="month in monthList"
              :key="month"
              class="coupon_content"
            >
              <p class="coupon_label">{{ month }}</p>
              <at-input
                v-model.number="couponData[month]"
                size="small"
                placeholder="请输入全年单价"
                class="price_input"
              >
              </at-input>
            </div>
          </div>
        </div>
        <div class="handler">
          <at-button
            type="primary"
            @click="reCount"
          >重新计算</at-button>
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
      count
      price: 18140,
      couponData: {},
      bookData: {},
      monthList: [],
      sheetsListData: [],
      monthDataNumberData: {}
    }
  },
  computed: {
    fileFigureOut() {
      return this.$store.state.app.fileFigureOut
    }
  },
  watch: {
    bookData: {
      handler(newData) {
        this.monthList = newData.SheetNames.filter(
          item => {
            return item.indexOf('月') !== -1
          }
        )
        const sheetsListData = {}
        const couponData = {}
        this.monthList.forEach(
          item => {
            sheetsListData[item] = newData.Sheets[item]
            couponData[item] = 400
          }
        )
        this.sheetsListData = sheetsListData
        this.couponData = couponData
      },
      deep: true
    },
    sheetsListData: {
      handler(newData) {
        this.counterEffectNumberDataForMonth(newData)
        this.counterEffectDataForMonth()
        this.$store.commit('app/TOGGLE_LOADING', { loading: false })
        this.$store.commit('app/TOGGLE_FILE_STATUS', true)
      },
      deep: true
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
          this.fileInfo = file
          this.$store.commit('app/TOGGLE_LOADING', { loading: true })
          readWorkbookFromLocalFile(file,
            (bookData) => {
              this.bookData = bookData
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
    },
    reCount() {

    },
    /**
     * 处理出每个月有效数据条数
     */
    counterEffectNumberDataForMonth(newData) {
      const monthDataNumberData = {}
      Object.keys(newData).forEach(
        tableKey => {
          const monthData = newData[tableKey]
          const cellKeys = Object.keys(monthData)
          const effectivityCellKeys = cellKeys.filter(
            cellKey => {
              const newReg = /^C\d+$/
              return newReg.test(cellKey) && cellKey !== 'C1'
            }
          )
          monthDataNumberData[tableKey] = effectivityCellKeys.length
        }
      )
      this.monthDataNumberData = monthDataNumberData
    },
    /**
     * 处理出每个月详细数据
     */
    counterEffectDataForMonth() {
      const monthDetailData = {}
      Object.keys(this.monthDataNumberData).forEach(
        month => {
          monthDetailData[month] = []
          for (let i = 0; i < this.monthDataNumberData[month]; i++) {
            const monthData = this.sheetsListData[month]
            const rowData = {
              name: monthData[`C${i + 3}`] ? monthData[`C${i + 3}`].v : '',
              yjqd: monthData[`F${i + 3}`] ? monthData[`F${i + 3}`].v : '',
              ejqd: monthData[`G${i + 3}`] ? monthData[`G${i + 3}`].v : '',
              sjqd: monthData[`H${i + 3}`] ? monthData[`H${i + 3}`].v : '',
              dj: monthData[`J${i + 3}`] ? monthData[`J${i + 3}`].v : '',
              bqk: monthData[`K${i + 3}`] ? monthData[`K${i + 3}`].v : '',
              qk: monthData[`L${i + 3}`] ? monthData[`L${i + 3}`].v : '',
              zcje: monthData[`M${i + 3}`] ? monthData[`M${i + 3}`].v : '',
              zrje: monthData[`N${i + 3}`] ? monthData[`N${i + 3}`].v : '',
              tfje: monthData[`O${i + 3}`] ? monthData[`O${i + 3}`].v : '',
              // qkrq: monthData[`V${i + 3}`] ? monthData[`V${i + 3}`].v : '',
              qkrq: monthData[`V${i + 3}`] ? new Date(monthData[`V${i + 3}`].w) : '',
              demoRq: monthData[`X${i + 3}`] ? new Date(monthData[`X${i + 3}`].w) : '',
              // demoRq: monthData[`X${i + 3}`] ? monthData[`X${i + 3}`].v : '',
              yyr: monthData[`Y${i + 3}`] ? monthData[`Y${i + 3}`].v : '',
              qyr: monthData[`Z${i + 3}`] ? monthData[`Z${i + 3}`].v : '',
              kbxxtgr: monthData[`AG${i + 3}`] ? monthData[`AG${i + 3}`].v : ''
            }
            monthDetailData[month].push(rowData)
          }
        }
      )
      this.$store.commit('app/SET_MONTH_DETAIL_DATA', monthDetailData)
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
    text-align: center;
  }

  .count_info_container {
    margin-top: 54px;
    text-align: center;

    .price {
      display: inline-flex;
      align-items: center;
      margin-bottom: 34px;
    }

    .price-svg {
      width: 18px;
      height: 18px;
      margin-right: 14px;
    }

    .price_input {
      /deep/input {
        text-align: center;
      }
    }
  }

  .label {
    display: flex;
    align-items: center;
  }

  .coupon_input_list {
    display: grid;
    grid-template-columns: repeat(auto-fill, 148px);
    grid-gap: 20px;
    justify-content: space-around;
    margin-top: 14px;
    margin-bottom: 42px;

    .coupon_content {
      margin-left: 14px;
      margin-bottom: 14px;
      width: 148px;
      
      .coupon_label {
        margin-bottom: 7px;
      }
    }
  }
</style>
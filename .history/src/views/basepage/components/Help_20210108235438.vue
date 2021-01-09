<template>
  <div>
    name: monthData[`C${i + 3}`] ? monthData[`C${i + 3}`].v : '',
    yjqd: monthData[`F${i + 3}`] ? monthData[`F${i + 3}`].v : '',
    yjqd: monthData[`G${i + 3}`] ? monthData[`G${i + 3}`].v : '',
    yjqd: monthData[`H${i + 3}`] ? monthData[`H${i + 3}`].v : '',
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
    <el-table>
      <el-colunm></el-colunm>
    </el-table>
  </div>
</template>
<script>
export default {
  name: 'Help'
}
</script>
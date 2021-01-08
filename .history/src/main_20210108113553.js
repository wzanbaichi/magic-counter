import Vue from 'vue'
import App from './App.vue'
import router from './router'
const { BrowserWindow } = require('electron')
BrowserWindow.addDevToolsExtension('file://Users/liangchenkang/Library/Application Support/Google/Chrome/Default/Extensions/nhdogjmejiglipccpnnnanhbledajbpd/5.3.3_0')


Vue.config.productionTip = false

import AtComponents from 'at-ui'
import 'at-ui-style'    // 引入组件样式

// import 'at-ui-style/src/index.scss'      // 或者引入未构建版本的 scss 样式

Vue.use(AtComponents)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

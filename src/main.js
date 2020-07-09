import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入heyui组件库
import Hey from 'heyui'
import 'heyui/themes/index.less'
// 导入vue-qrcode-directive插件
import qrcode from 'vue-qrcode-directive'
import QRCode from 'vue-qrcode-directive/src/lib/qrcode'
Vue.use(Hey)
Vue.use(qrcode)
// 导入css和js样式(heyui)
require('heyui/themes/index.css')
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

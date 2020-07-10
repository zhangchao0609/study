import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Axios from 'axios'
// 导入heyui组件库
import Hey from 'heyui'
import 'heyui/themes/index.less'
// 导入vue-qrcode-directive插件
import qrcode from 'vue-qrcode-directive'
// import QRCode from 'vue-qrcode-directive/src/lib/qrcode'
// 导入css和js样式(heyui)
require('heyui/themes/index.css')
// 导入mock
require('./mock/mock')
Vue.use(Hey)
Vue.use(qrcode)
Vue.prototype.$axios = Axios
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

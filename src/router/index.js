import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Condition from '../views/Condition'
import Jiaofei from '../views/Jiaofei'
import Xiazai from '../views/Xiazai'
Vue.use(VueRouter)
// 定义路由规则
const routes = [
  { path: '/', component: Home },
  { path: '/home', name: 'home', component: Home },
  { path: '/condition', name: 'condition', component: Condition },
  { path: '/jiaofei', name: 'jiaofei', component: Jiaofei },
  { path: '/xiazai', name: 'xiazai', component: Xiazai }
]
// 初始化路由实例
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

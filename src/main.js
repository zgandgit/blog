// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '../static/css/index.css'
import Header from '../src/components/public/Header'
import User from '../src/components/User'
import Detail from '../src/components/Detail'
import Utils from '../static/js/utils'//公用的js方法文件 切勿写重要的信息 因为这个文件不会被编译
import Configs from './assets/js/config'
import axios from 'axios'

Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component("head-view",Header)
Vue.component("user-view",User)
Vue.component("detail-view",Detail)

Vue.prototype.utils = Utils
Vue.prototype.Configs = Configs
// axios.defaults.baseURL = '/port'
Vue.prototype.$axios = axios

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

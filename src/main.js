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
import Utils from '../static/js/utils'


Vue.config.productionTip = false
Vue.use(ElementUI)

Vue.component("head-view",Header)
Vue.component("user-view",User)
Vue.prototype.utils = Utils



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

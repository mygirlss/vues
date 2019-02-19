// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './public/router/index'
import {Rate} from 'element-ui'
import Mint from 'mint-ui'
import store from './public/vuex/index'
import 'element-ui/lib/theme-chalk/index.css'
import App from './App'


Vue.config.productionTip = false;
Vue.use(Rate)
Vue.use(Mint)
/* eslint-disable no-new */
var vm = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

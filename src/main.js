// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import Vue from 'vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import routerConfig from './router'
import App from './App.vue'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import './assets/css/common.css'
// 跨域，上线前处理
axios.defaults.baseURL = '/api'

Vue.use(VueRouter); 
const router=new VueRouter(routerConfig);     
Vue.prototype.router = router;
Vue.prototype.$http = axios;
Vue.config.productionTip = false;


new Vue({
  el: '#app',
  render: h => h(App),
  router
})

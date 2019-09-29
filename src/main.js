import Vue from 'vue'
import App from './App.vue'
import router from './router'
import "@/mock"
import validate from './validate.js'
import http from './api'
import store from './vuex'

Vue.config.productionTip = false
Vue.prototype.$http = http;

new Vue({
  render: h => h(App),
  router,
  store
}).$mount('#app')

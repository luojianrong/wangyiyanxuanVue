import routes from '../routes'
import Vue from 'vue'
import vueRouter from 'vue-router'

Vue.use(vueRouter)

const router = new vueRouter({
  routes,
  linkActiveClass:'active'
})

export default router;

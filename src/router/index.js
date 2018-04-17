import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'
import store from '../store/store.js'

Vue.use(VueRouter)
let router = new VueRouter ({
    routes
})

router.beforeEach((to, from, next) => {
  let isLogin = getStateLogin()
  if (to.name === 'login') {
    next()
  } else {
    if (!isLogin) {
      next('/login')
    } else {
      next()
    }
  }
})

function getStateLogin () {
  let tk = localStorage.getItem('token')
  if (tk) {
    store.commit('saveUser', localStorage.getItem('username'))
  }
  return !!tk
}
export default router
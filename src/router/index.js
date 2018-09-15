import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login : ()=>import('@/view/login/login'),
  index : ()=>import('@/view/layout/layout')
}

export default new Router({
  routes: [
    {
      path: '/',
      component: components.login
    },
    {
      path:'/home',
      component: components.index
    }
  ]
})

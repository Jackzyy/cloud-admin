import Vue from 'vue'
import Router from 'vue-router'


Vue.use(Router)

const components = {
  login : ()=>import('@/view/login/login'),
  home : ()=>import('@/view/layout/layout')
}

export default new Router({
  routes: [
    {
      path: '/',
      component: components.login
    },
    {
      path:'/home',
      component: components.home,
      children:[
        {
          path:'bookList',
          component:()=>import('@/view/book/bookList')
        },
        {
          path:'bookAdd',
          component:()=>import('@/view/book/bookAdd')
        },
        {
          path:'bookEdit',
          component:()=>import('@/view/book/bookEdit')
        },
        {
          path:'userList',
          component:()=>import('@/view/user/userList')
        },
        {
          path:'userAdd',
          component:()=>import('@/view/user/userAdd')
        },
        {
          path:'userInfo',
          component:()=>import('@/view/user/userInfo')
        },
        {
          path:'userPwd',
          component:()=>import('@/view/user/userPwd')
        },
        {
          path:'categoryAdd',
          component:()=>import('@/view/category/categoryAdd')
        },
        {
          path:'categoryList',
          component:()=>import('@/view/category/categoryList')
        },
        {
          path:'sideShow',
          component:()=>import('@/view/sideshow/sideShow')
        },
        {
          path:'categoryEdit',
          component:()=>import('@/view/category/categoryEdit')
        },
        {
          path:'categoryInfo',
          component:()=>import('@/view/category/categoryInfo')
        }
      ]
    }
  ]
})

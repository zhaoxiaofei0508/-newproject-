import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Classific from '../pages/classific'
import Shopping from '../pages/shopping'
import Lundetails from "../pages/lundetails"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/index',
      name: 'Index',
      component: Index
    },  
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/classific',
      name: 'Classific',
      component: Classific
    },
    {
      path: '/shopping',
      name: 'Shopping',
      component: Shopping
    },
    {
      path: '/lundetails',
      name: 'Lundetails',
      component: Lundetails
    },
    {path:'/*',redirect:"/index"}


  ]
})

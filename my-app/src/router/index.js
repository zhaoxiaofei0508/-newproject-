import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Classific from '../pages/classific'
import Shopping from '../pages/shopping'
import Allorder from '../pages/allorder'
import Payment from '../pages/payment'
import Pdelivery from '../pages/pdelivery'
import Preceipt from '../pages/preceipt'
import Comment from '../pages/comment'
import My_mine from '../pages/my_mine'
import Mysearch from '../pages/mysearch'
import My_set from '../pages/my_set'


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
      path: '/my_mine',
      name: 'My_mine',
      component: My_mine
    },
    {
      path: '/mysearch',
      name: 'Mysearch',
      component: Mysearch
    },
    {
      path: '/allorder',
      name: 'Allorder',
      component: Allorder
    },
    {
      path: '/payment',
      name: 'Payment',
      component: Payment
    },
    {
      path: '/pdelivery',
      name: 'Pdelivery',
      component: Pdelivery
    },
    {
      path: '/preceipt',
      name: 'Preceipt',
      component: Preceipt
    },
    {
      path: '/comment',
      name: 'Comment',
      component: Comment
    },
    {
      path: '/my_set',
      name: 'My_set',
      component: My_set
    },
    {path:'/*',redirect:"/index"},


  ]
})

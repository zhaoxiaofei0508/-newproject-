import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Classific from '../pages/classific'
import Shopping from '../pages/shopping'
import List from '../pages/list'
//1引入分类
import Egg from '../components/list/egg3'
import Fruit from '../components/list/fruit1'
import Seasonal from '../components/list/seasonal2'
import Summer from '../components/list/fruit/summer1'
import Turn from '../components/list/fruit/turn2'
import Season from '../components/list/fruit/season3'
import Apricot from '../components/list/fruit/apricot4'



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
    // 二级路由
      {
      path: '/list',
      name: 'List',
      component: List,
      children:[
        {
          path: '/list/fruit',
          name: 'Fruit',
          component: Fruit,
          // 三级路由
          children:[
            {
              path: '/list/fruit/summer',
              name: 'Summer',
              component: Summer,
            },
            {
              path: '/list/fruit/turn',
              name: 'Turn',
              component: Turn,
            },
            {
              path: '/list/fruit/season',
              name: 'Season',
              component: Season,
            },
            {
              path: '/list/fruit/apricot',
              name: 'Apricot',
              component: Apricot,
            }
          ]
        },
        {
          path: '/list/seasonal',
          name: 'Seasonal',
          component: Seasonal
        },
        {
          path: '/list/egg',
          name: 'Egg',
          component: Egg
        }
      ]
    },
    {path:'/*',redirect:"/index"},


  ]
})

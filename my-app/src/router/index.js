import Vue from 'vue'
import Router from 'vue-router'
import Index from '../pages/index'
import Home from '../pages/home'
import Shopping from '../pages/shopping'
import Lundetails from "../pages/lundetails"
import List from '../pages/list'
//1引入分类
import Egg from '../components/list/egg3'
import Fruit from '../components/list/fruit1'
import Seasonal from '../components/list/seasonal2'
import Summer from '../components/list/fruit/summer1'
import Turn from '../components/list/fruit/turn2'
import Season from '../components/list/fruit/season3'
import Apricot from '../components/list/fruit/apricot4'
import Details from '../pages/details'
import DetailsComment from '../components/details/details_comment'
import Denglu from '../pages/denglu'
import Denglutwo from '../pages/denglutwo'
import Register from '../pages/register'
import Mine from '../pages/mine'
import Carshop from '../pages/carshop'
import Fenlei from '../pages/fenlei'
import Hequlife from '../pages/Hequlife'
import ContainerContent from '../components/index/containercontent'


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
      path: '/hequlife',
      name: 'Hequlife',
      component: Hequlife
    },
    {
      path: '/index',
      name: 'Index',
      component: Index
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/carshop',
      name: 'Carshop',
      component: Carshop
    },
    {
      path: '/fenlei',
      name: 'Fenlei',
      component: Fenlei
    },
    {
      path: '/denglu',
      name: '/Denglu',
      component: Denglu
    },
    {
      path: '/denglutwo',
      name: '/Denglutwo',
      component: Denglutwo
    },
    {
      path: '/register',
      name: '/Register',
      component: Register
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
    {
      path:'/details',
      name:'Details',
      component:Details
    },
    {
      path: '/details_comment',
      name: 'DetailsComment',
      component: DetailsComment
    },
    {
      path: '/containercontent/:id',
      name: 'ContainerContent',
      component: ContainerContent
    },
    {path:'/*',redirect:"/index"},


  ],
})

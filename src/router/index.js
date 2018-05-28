import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/test'    //引入组件
import Title1 from '@/view/title1'
import Title2 from '@/view/title2'
import Goods from '@/view/goods'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/goods',
      name:'goods',
      component:Goods
    },
    {
      path: '/',
      name: '/',
      components:{
        default: Goods,
        test: Test
      },
      children: [{
        path:'test/title1',
        name:'title1',
        component:Title1
      },{
        path:'test/title2',
        name:'title2',
        component:Title2
      }
    ]
    }
  ]
})

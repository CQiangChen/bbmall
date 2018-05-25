import Vue from 'vue'
import Router from 'vue-router'
import Test from '@/view/test'    //引入组件
import Title1 from '@/view/title1'
import Title2 from '@/view/title2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/test',
      name: 'test',
      component: Test,       //填写路由参数
      //因为title1,2都是作为test.vue的子路径，所以写在children属性下
      children: [{
        path: 'title1',
        name: 'title1',
        component: Title1
      },
      {
        path: 'title2',
        name: 'title2',
        component: Title2
      }]

      // 填写children子路由的path不要加/
    }
  ]
})

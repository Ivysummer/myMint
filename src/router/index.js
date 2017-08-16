import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
// 测试页
import Hello from '@/components/Hello'
import Home from './../components/index'

Vue.use(Router)

import Index from '@/views/index/index'

export default new Router({
  routes: [
   
    // {
    //   path: '/',
    //   name: 'Hello',
    //   component: Hello
    // },
    // {
    //   path: '/',
    //   name: 'Home',
    //   component: Home
    // }
    {
      path:'/',
      component:App,
      children:[
          {
            path:'',
            redirect:'/index'
          },
          {
            path:'/index',
            component:Index
          }

      ]
    }
  ]
})

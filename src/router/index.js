import Vue from 'vue'
import Router from 'vue-router'
import Homes from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Message from '@/components/Message'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Homes
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/message',
      name: 'Message',
      component: Message
    }
  ]
})

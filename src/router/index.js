import Vue from 'vue'
import Router from 'vue-router'
import Homes from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Message from '@/components/Message'
import Activity from '@/components/Activity'
import Course from '@/components/Course'
import Essay from '@/components/Essay'
import WapHome from '@/components/wap/Index'

Vue.use(Router)
/**
 * 注意一点移动端请务必带有wap的连续字眼 psth里面
 * 电脑端务必不要带有wap的连续字眼 如果配置错误可能造成意想不到的结果
 */
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
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity
    },
    {
      path: '/course',
      name: 'Course',
      component: Course
    },
    {
      path: '/essay',
      name: 'Essay',
      component: Essay
    },
    {
      path: '/wap_home',
      name: 'WapHome',
      component: WapHome
    }

  ]
})

import Vue from 'vue'
import Router from 'vue-router'
import Homes from '@/components/Home'
import Detail from '@/components/Detail'
import About from '@/components/About'
import Message from '@/components/Message'
import Activity from '@/components/Activity'
import Course from '@/components/Course'
import Essay from '@/components/Essay'

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
      component: Homes,
      meta: {
        title: '阿光个人博客-首页'
      }
    },
    {
      path: '/detail',
      name: 'Detail',
      component: Detail,
      meta: {
        title: '帖子详情'
      }
    },
    {
      path: '/about',
      name: 'About',
      component: About,
      meta: {
        title: '阿光的技术教程'
      }
    },
    {
      path: '/message',
      name: 'Message',
      component: Message,
      meta: {
        title: '周光个人博客'
      }
    },
    {
      path: '/activity',
      name: 'Activity',
      component: Activity,
      meta: {
        title: '活动列表'
      }
    },
    {
      path: '/course',
      name: 'Course',
      component: Course,
      meta: {
        title: '技术教程'
      }
    },
    {
      path: '/essay',
      name: 'Essay',
      component: Essay,
      meta: {
        title: '文章页'
      }
    }

  ]
})

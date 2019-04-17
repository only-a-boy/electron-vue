import Vue from 'vue'
import Router from 'vue-router'

import Login from '@/components/login/Login'
import IntroductionPage from '@/components/introductionPage/IntroductionPage'
import Home from '@/components/home/Home'
import VuePage from '@/components/content/Vue'
import VueRouterPage from '@/components/content/VueRouter'
import VuexPage from '@/components/content/Vuex'
import Station from '@/components/3d/Station'
import Test from '@/components/3d/Test'
import Line from '@/components/line/Line'
import NotFound from '@/components/common/NotFound'

Vue.use(Router)

export const router = new Router({
  routes: [
    {
      path: '/',
      component: Login
    },
    {
      path: '/home',
      component: Home,
      redirect: '/line',
      children: [
        {
          path: '/line',
          component: Line
        },
        {
          path: '/electron',
          component: IntroductionPage
        },
        {
          path: '/vue',
          component: VuePage
        },
        {
          path: '/vue-router',
          component: VueRouterPage
        },
        {
          path: '/vuex',
          component: VuexPage
        },
        {
          path: '/station',
          component: Station
        },
        {
          path: '/test',
          component: Test,
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
})

// 异步挂载的路由
// 动态需要根据权限加载的路由表
export const asyncRouterMap = [
  {
    path: '/schedules',
    meta: {
      title: 'schedules',
      icon: 'el-icon-setting',
      roles: ['admin'],
      requiresAuth: true
    },
    component: resolve => require(['@/components/schedules/Schedules'], resolve),
    // children: [
    //   {
    //     name: 'permission',
    //     path: '/permission',
    //     meta: {
    //       title: 'permission', icon: 'el-icon-menu', roles: ['admin']
    //     },
    //     component: resolve => require(['@/components/home/Home'], resolve)
    //   }
    // ]
  }
]

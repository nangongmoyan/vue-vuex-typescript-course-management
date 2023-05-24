import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'
import { permissionRoutes } from './permission'
import { courseRoutes } from './course'
import { advertRoutes } from './advert'
import { userRoutes } from './user'

const routes: Array<RouteConfig> = [
  {
    path: '/login',
    name: 'login',
    component: () =>
      import(/* webpackChunkName: 'login' */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    meta: { requiresAuth: true },
    children: [
      {
        path: '', // 默认子路由
        name: 'home',
        component: () =>
          import(/* webpackChunkName: 'home' */ '@/views/home/index.vue')
      }

    ]
  },
  permissionRoutes,
  courseRoutes,
  advertRoutes,
  userRoutes,
  {
    path: '*',
    name: '404',
    component: () =>
      import(/* webpackChunkName: '404' */ '@/views/error-page/404.vue')
  },
  {
    path: '/not-permission',
    name: 'not-permission',
    component: () => import('@/views/error-page/403.vue')
  }
]

export default routes

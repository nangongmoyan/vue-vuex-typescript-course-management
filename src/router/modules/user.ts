import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const userRoutes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: { requiresAuth: true, title: '用户管理' },
  children: [
    {
      path: '/Users',
      name: 'user',
      component: () =>
        import(/* webpackChunkName: 'user' */ '@/views/user/index.vue'),
      meta: {
        menuId: 'Users'
      }
    }
  ]
}

export { userRoutes }

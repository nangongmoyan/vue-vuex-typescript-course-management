import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const permissionRoutes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: {
    requiresAuth: true,
    title: '权限管理',
    meta: {
      menuId: 'Rights'
    }
  },
  children: [
    {
      path: '/Role',
      name: 'role',
      component: () => import(/* webpackChunkName: 'role' */ '@/views/role/index.vue'),
      meta: {
        title: '角色管理',
        menuId: 'Role'
      }
    },
    {
      path: '/Menu',
      name: 'menu',
      component: () => import(/* webpackChunkName: 'menu' */ '@/views/menu/index.vue'),
      meta: {
        title: '菜单管理',
        menuId: 'Menu'
      }
    },
    {
      path: '/Resource',
      name: 'resource',
      component: () => import(/* webpackChunkName: 'resource' */ '@/views/resource/index.vue'),
      meta: {
        title: '资源管理',
        menuId: 'Resource'
      }
    },
    {
      path: '/AddMenu',
      name: 'menu-create',
      component: () => import(/* webpackChunkName: 'menu-create-edit' */ '@/views/menu/create.vue'),
      meta: {
        title: '添加菜单',
        menuId: 'AddMenu'
      }
    },
    {
      path: '/UpdateMenu?:id',
      name: 'menu-edit',
      component: () => import(/* webpackChunkName: 'menu-create-edit' */ '@/views/menu/edit.vue'),
      meta: {
        title: '编辑菜单',
        menuId: 'UpdateMenu'
      }
    },
    {
      path: '/AllocMenu?:roleId',
      name: 'alloc-menu',
      component: () => import(/* webpackChunkName: 'alloc-menu' */ '@/views/role/alloc-menu.vue'),
      props: true, // 将路由路径参数映射到组件的 props 数据中
      meta: {
        title: '分配菜单',
        menuId: 'AllocMenu'
      }
    },
    {
      path: '/AllocResource?:roleId',
      name: 'alloc-resource',
      component: () => import(/* webpackChunkName: 'alloc-menu' */ '@/views/role/alloc-resource.vue'),
      props: true, // 将路由路径参数映射到组件的 props 数据中
      meta: {
        title: '分配资源',
        menuId: 'AllocResource'
      }
    }
  ]
}

export { permissionRoutes }

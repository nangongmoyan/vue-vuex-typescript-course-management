import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'
import routes from './modules/index'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
Vue.use(VueRouter)

const router = new VueRouter({
  routes
})

router.beforeEach(async (to, from, next) => {
  nprogress.start()
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (!store.state.user) {
      // 如果没有登录，跳转到登录页面
      return next({
        name: 'login',
        query: {
          redirect: to.fullPath === '/' ? '/Role' : to.fullPath
        }
      })
    }
    // 如果登录了，校验访问权限
    // 1. 获取用户权限列表
    const { menuList = [] } = await store.dispatch('getUserPermissons')

    // 2. 判断当前访问的路由是否存在于权限列表中
    for (let i = 0; i < menuList.length; i++) {
      const menu = menuList[i]
      // 有权限，允许通过
      if (menu.href === to.meta?.menuId) {
        return next()
      }
      if (menu.subMenuList) {
        for (let j = 0; j < menu.subMenuList.length; j++) {
          const subMenu = menu.subMenuList[j]
          // 有权限，允许通过
          if (subMenu.href === to.meta?.menuId) {
            return next()
          }
        }
      }
    }

    // 代码执行到这里，以为上上面没有 return next()
    // 那这里就要让用户到 403 页面了
    return next('/not-permission')
  }

  next()
})

router.afterEach(() => {
  nprogress.done()
})

// 全局前置守卫：任何页面的访问都要经过这里
// to：要去哪里的路由信息
// from：从哪里来的路由信息
// next：通行的标志
// router.beforeEach((to, from, next) => {
//   // to.matched 是一个数组（匹配到是路由记录）
//   if (to.matched.some(record => record.meta.requiresAuth)) {
//     if (!store.state.user) {
//       // 跳转到登录页面
//       next({
//         name: 'login',
//         query: { // 通过 url 传递查询字符串参数
//           redirect: to.fullPath // 把登录成功需要返回的页面告诉登录页面
//         }
//       })
//     } else {
//       next() // 需要登录验证通过
//     }
//   } else {
//     next() // 不需要登录允许通过
//   }
// })

export default router

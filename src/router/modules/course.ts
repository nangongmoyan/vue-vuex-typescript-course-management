import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const courseRoutes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: { requiresAuth: true, title: '课程管理' },
  children: [
    {
      path: '/course',
      name: 'course',
      component: () =>
        import(/* webpackChunkName: 'course' */ '@/views/course/index.vue')
    },
    {
      path: '/course/create',
      name: 'course-create',
      component: () => import(/* webpackChunkName: 'course-create' */ '@/views/course/create.vue'),
      meta: { title: '创建课程' }
    },
    {
      path: '/course/:courseId/edit',
      name: 'course-edit',
      component: () => import(/* webpackChunkName: 'course-edit' */ '@/views/course/edit.vue'),
      props: true,
      meta: { title: '更新课程' }
    },
    {
      path: '/course/:courseId/section',
      name: 'course-section',
      component: () => import(/* webpackChunkName: 'course-section' */ '@/views/course/section.vue'),
      props: true,
      meta: { title: '课程内容' }
    },
    {
      path: '/course/:courseId/video',
      name: 'course-video',
      component: () => import(/* webpackChunkName: 'course-video' */ '@/views/course/video.vue'),
      props: true,
      meta: { title: '上传视频' }
    }
  ]
}

export { courseRoutes }

import Layout from '@/layout/index.vue'
import { RouteConfig } from 'vue-router'

const courseRoutes: RouteConfig = {
  path: '/',
  component: Layout,
  meta: { requiresAuth: true, title: '课程管理' },
  children: [
    {
      path: '/Courses',
      name: 'courses',
      component: () =>
        import(/* webpackChunkName: 'course' */ '@/views/course/index.vue'),
      meta: {
        menuId: 'Courses'
      }
    },
    {
      path: '/NewCourses',
      name: 'new-courses',
      component: () => import(/* webpackChunkName: 'course-create' */ '@/views/course/create.vue'),
      meta: { title: '新增课程', menuId: 'Courses' }
    },
    {
      path: '/EditCourse?:courseId',
      name: 'edit-course',
      component: () => import(/* webpackChunkName: 'course-edit' */ '@/views/course/edit.vue'),
      props: true,
      meta: { title: '更新课程', menuId: 'Courses' }
    },
    {
      path: '/CourseSection/:courseId',
      name: 'course-section',
      component: () => import(/* webpackChunkName: 'course-section' */ '@/views/course/section.vue'),
      props: true,
      meta: { title: '课程内容', menuId: 'Courses' }
    },
    {
      path: '/CourseVideo/:courseId',
      name: 'course-video',
      component: () => import(/* webpackChunkName: 'course-video' */ '@/views/course/video.vue'),
      props: true,
      meta: { title: '上传视频', menuId: 'VideoOptions' }
    }
  ]
}

export { courseRoutes }

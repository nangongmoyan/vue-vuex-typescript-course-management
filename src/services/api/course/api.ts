import { CourseStatus } from '@/features/course'
import { clientRequest } from '../../request'
import { GetQueryCoursesResponse } from './type'

export const courseApi = {
  /**
   *
   * @param data
   * @returns
   */
  getQueryCourses: function (data:any):Promise<GetQueryCoursesResponse> {
    return clientRequest.post('/boss/course/getQueryCourses', data)
  },
  /**
   *
   * @param params
   * @returns
   */
  changeState: function (params:{courseId:number, status:CourseStatus}):Promise<any> {
    return clientRequest.get('/boss/course/changeState', { params })
  }
}

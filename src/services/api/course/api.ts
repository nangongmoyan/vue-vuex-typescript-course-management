import { config } from '../../config'
import { AxiosProgressEvent } from 'axios'
import { clientRequest } from '../../request'
import { CourseOneStatus } from '@/features/course'
import { GetCourseByIdResponse, GetQueryCoursesResponse, UploadCourseImageResponse } from './type'

export const courseApi = {
  /**
   *
   * @param data
   * @returns
   */
  getQueryCourses: function (data:any):Promise<GetQueryCoursesResponse> {
    return clientRequest.post(`${config.boss}/boss/course/getQueryCourses`, data)
  },
  /**
   *
   * @param params
   * @returns
   */
  changeState: function (params:{courseId:number, status:CourseOneStatus}):Promise<any> {
    return clientRequest.get(`${config.boss}/boss/course/changeState`, { params })
  },

  /**
   *
   * @param data
   * @returns
   */
  saveOrUpdateCourse: function (data:any):Promise<any> {
    return clientRequest.post(`${config.boss}/boss/course/saveOrUpdateCourse`, data)
  },

  /**
   * 课程上传图片
   * @param data
   * @param onUploadProgress
   * @returns
   */
  uploadCourseImage: function (data:FormData, onUploadProgress?: (progressEvent: AxiosProgressEvent) => void):Promise<UploadCourseImageResponse> {
    return clientRequest.post(`${config.boss}/boss/course/upload`, data, { onUploadProgress })
  },
  /**
   *
   * @param courseId
   * @returns
   */
  getCourseById: function (courseId: string | number):Promise<GetCourseByIdResponse> {
    return clientRequest.get(`${config.boss}/boss/course/getCourseById`, { params: { courseId } })
  }
}

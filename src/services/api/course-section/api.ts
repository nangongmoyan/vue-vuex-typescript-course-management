import { config } from '../../config'
import { clientRequest } from '../../request'
import { SectionItem } from '../../../features/course-section'
import { GetSectionAndLessonResponse, GetSectionByIdResponse } from './type'

/**
 * 课程章节相关请求模块
 */
export const courseSectionApi = {
  /**
   *
   * @param courseId
   * @returns
   */
  getSectionAndLesson: function (courseId:string | number):Promise<GetSectionAndLessonResponse> {
    return clientRequest.get(`${config.boss}/boss/course/section/getSectionAndLesson`, { params: { courseId } })
  },
  /**
   *
   * @param data
   * @returns
   */
  saveOrUpdateSection: function (data:SectionItem) {
    return clientRequest.post(`${config.boss}/boss/course/section/saveOrUpdateSection`, data)
  },
  /**
   *
   * @param sectionId
   * @returns
   */
  getSectionById: function (sectionId:string| number):Promise<GetSectionByIdResponse> {
    return clientRequest.get(`${config.boss}/boss/course/section/getBySectionId`, { params: { sectionId } })
  }
}

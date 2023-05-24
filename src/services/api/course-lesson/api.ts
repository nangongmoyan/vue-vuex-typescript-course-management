import { config } from '../../config'
import { clientRequest } from '../../request'
import { LessonDTO } from '../../../features/course-section'

export const courseLessonApi = {
  /**
   *
   * @param data
   * @returns
   */
  saveOrUpdateLesson: function (data:LessonDTO) {
    return clientRequest.post(`${config.boss}/boss/course/lesson/saveOrUpdate`, data)
  }
}

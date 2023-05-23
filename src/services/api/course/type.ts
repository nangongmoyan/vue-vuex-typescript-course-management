import { ResopnseTwo } from '../..//ResponseType'
import { CourseTwoItem, QueryCoursesResponse, UploadCourseImage } from '../../../features/course'

export interface GetQueryCoursesResponse extends ResopnseTwo {
  data: QueryCoursesResponse
}
export interface UploadCourseImageResponse extends ResopnseTwo {
  data: UploadCourseImage
}
export interface GetCourseByIdResponse extends ResopnseTwo {
  data: CourseTwoItem
}

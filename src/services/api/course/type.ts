import { ResopnseTwo } from '../..//ResponseType'
import { QueryCoursesResponse } from '../../../features/course'

export interface GetQueryCoursesResponse extends ResopnseTwo {
  data: QueryCoursesResponse
}

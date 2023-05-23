import { ResopnseTwo } from '../../ResponseType'
import { SectionItem } from '../../../features/course-section'

export interface GetSectionAndLessonResponse extends ResopnseTwo {
  data: SectionItem[]
}
export interface GetSectionByIdResponse extends ResopnseTwo {
  data: SectionItem
}

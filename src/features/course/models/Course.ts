export enum CourseOneStatus {
  /** 全部 */
  Shelves = '',
  /** 上架 */
  OnShelves = 1,
  /** 下架 */
  offShelves = 0
}

export interface TeacherDTO {
  id: number;
  courseId: number;
  teacherName: string;
  teacherHeadPicUrl: string | null;
  position: string;
  description: string;
}

export interface CourseOneItem {
  id: number;
  courseName: string;
  brief: string;
  courseDescription: string;
  teacherId: null;
  totalCourseTime: null;
  sales: number;
  actualSales: null;
  price: number;
  priceTag: string;
  discounts: number;
  discountsTag: string;
  courseImgUrl: string;
  shareTitle: null;
  shareDescription: null;
  shareImageTitle: null;
  isNew: boolean | null;
  isNewDes: null | string;
  lastOperatorId: null;
  createTime: Date;
  updateTime: Date;
  autoOnlineTime: null;
  isDel: boolean;
  totalDuration: null;
  seoDescription: null;
  seoKeywords: null;
  seoTitle: null;
  h5Url: null;
  courseListImg: string;
  tag: null;
  status: CourseOneStatus;
  sortNum: number;
  brokerageRate: null;
  joinDistribution: null;
  lastNoticeTime: null;
  previewFirstField: string;
  previewSecondField: string;
  distributionPosterImage: null;
  distributionCopywriter: null;
  isGray: null;
  sectionDTOS: null;
  teacherDTO: TeacherDTO;
  courseUrl: null;
  topNCourseLesson: null;
  isBuy: boolean;
  lessonUpdateCount: null;
  compareTime: null;
  lastLearnLessonName: null;
  courseDescriptionMarkDown: string;
  activityCourse: boolean;
  activityTime: null;
  activityCourseDTO: null;
  isStatusLoading?: boolean
}

export interface ActivityCourseDTO {
  id: number,
  courseId: number,
  beginTime: string,
  endTime: string,
  amount: number,
  stock: number
}

export enum CourseTwoStatus {
  /** 已发布 */
  Published = 1,
  /** 未发布 */
  Unpublished = 0
}

export interface CourseTwoItem {
  id?: number
  courseName: string;
  brief: string;
  teacherDTO: TeacherDTO;
  courseDescriptionMarkDown: string;
  price: number;
  discounts: number;
  priceTag: string;
  previewFirstField: string;
  previewSecondField: string;
  discountsTag: string;
  courseListImg: string;
  courseImgUrl: string;
  sortNum: number;
  status: CourseTwoStatus;
  sales: number;
  activityCourse: boolean;
  activityCourseDTO: ActivityCourseDTO | null;
}

export interface QueryCoursesResponse {
  records: CourseOneItem[];
  total: number;
  size: number;
  current: number;
  pages: number;
}

export interface CourseListData {
  filterParams: {
    currentPage: number,
    pageSize: number,
    courseName: string,
    status: CourseOneStatus
  },
  totalCount: number,
  isLoading: boolean,
  courses: CourseOneItem[]
}

export enum UploadCourseImageStatus {
  Done ='done'
}
export interface UploadCourseImage {
  uid: string;
  name: string;
  status: UploadCourseImageStatus;
  response: null;
}

type omitProps = 'id'|'courseId'
export interface CreateOrUpdateCourseData {
  activeStep: number
  steps:{title: string; icon: string}[]
  course: Omit<CourseTwoItem, 'teacherDTO' | 'activityCourseDTO'> & {
    isNew:boolean,
    isNewDes: string,
    autoOnlineTime: string,
    teacherDTO: Omit<TeacherDTO, omitProps>,
    activityCourseDTO: Omit<ActivityCourseDTO, omitProps>}
}

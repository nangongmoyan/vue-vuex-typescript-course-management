export enum CourseStatus {
  /** 全部 */
  Shelves = '',
  /** 上架 */
  OnShelves = 1,
  /** 下架 */
  offShelves = 0
}

export interface CourseItem {
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
  status: CourseStatus;
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
  teacherDTO: null;
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

export interface QueryCoursesResponse {
  records: CourseItem[];
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
    status: CourseStatus
  },
  totalCount: number,
  isLoading: boolean,
  courses: CourseItem[]
}

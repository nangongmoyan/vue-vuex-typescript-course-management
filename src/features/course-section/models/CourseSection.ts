import { CourseTwoItem } from '../../course/models'

export interface LessonDTO {
  id: number ;
  courseId: number | string;
  sectionId: number;
  theme: string;
  duration: string | number;
  durationNum: null;
  isFree: boolean;
  startImgUrl: null;
  textContent: null;
  markdownTextContent: null;
  transcode: null;
  resourceUrl: null;
  lastOperatorId: null;
  createTime: Date;
  updateTime: Date;
  isDel: boolean;
  fileId: null;
  orderNum: number;
  aliFileUrl: null;
  aliFileDk: null;
  aliFileEdk: null;
  aliFileVid: null;
  status: number;
  isTimingPublish: null;
  publishTime: null;
  mediaDTO: null;
}

export interface SectionItem {
  id: number;
  courseId: number | string ;
  sectionName: string;
  description: string;
  createTime: Date;
  updateTime: Date;
  isVisible: null;
  isDe: boolean;
  orderNum: number;
  lastOperatorId: null;
  status: number;
  lessonDTOS: LessonDTO[] | null;
}

export interface CourseSectionData {
  course:CourseTwoItem,
  sections:SectionItem[]
  defaultProps : {
    children: string
    label: (data: any) => any
  },
  isAddSectionShow: boolean,
  section:Partial<SectionItem>,
  isAddLessonShow: boolean,
  lesson:Partial<LessonDTO> & { sectionName?: string },
  isLoading: boolean
}

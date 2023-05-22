
export interface RecordItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  name: string;
  categoryId: number;
  url: string;
  description: string;
  selected: boolean;
}

export interface Resource {
  records: RecordItem[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  hitCount: boolean;
  searchCount: boolean;
  pages: number;
}

export interface ResourceListForm {
  name: string,
  url: string,
  /** 默认查询第1页数据 */
  current: number,
  /** 每页大小 */
  size: number,
  /** 资源分类 */
  categoryId: null | number
}

export interface ResourceCategorieItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: number | null;
  name: string;
  sort: number;
  selected: boolean;
}

export interface ResourceListData {
  totalCount: number
  isLoading: boolean
  form:ResourceListForm
  records: RecordItem[]
  resourceCategories: ResourceCategorieItem[]
}

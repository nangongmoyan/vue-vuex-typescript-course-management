import { RecordItem } from '../../common'
import { ResourceCategorieItem } from '../../resource-category'

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

export interface ResourceListData {
  totalCount: number
  isLoading: boolean
  form:ResourceListForm
  records: RecordItem[]
  resourceCategories: ResourceCategorieItem[]
}

export interface AllocResourceData {
  resources: RecordItem[] | ResourceCategorieItem[]
  checkedKeys: number[]
  defaultProps: {
    children: 'children',
    label: 'name'
  },
}

export interface RoleResourceItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  name: string;
  sort: number;
  selected: boolean;
  resourceList: RecordItem[] | null;
}

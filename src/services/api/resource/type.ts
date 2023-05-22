import { ResopnseTwo } from '../../ResponseType'
import { RecordItem } from '../../../features/common'
import { RoleResourceItem } from '../../../features/resource'
import { ResourceCategorieItem } from '../../../features/resource-category'

export interface GetResourceCategoriesResponse extends ResopnseTwo {
  data: ResourceCategorieItem[]
}
export interface GetAllResourcesResponse extends ResopnseTwo {
  data: RecordItem[]
}
export interface GetRoleResourcesResponse extends ResopnseTwo {
  data: RoleResourceItem[]
}

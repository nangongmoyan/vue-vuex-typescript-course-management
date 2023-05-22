import { ResopnseTwo } from '../../ResponseType'
import { ResourceCategorieItem } from '../../../features/resource-category'

export interface GetResourceCategoriesResponse extends ResopnseTwo {
  data: ResourceCategorieItem[]
}

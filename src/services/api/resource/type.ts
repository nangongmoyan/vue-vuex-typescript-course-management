import { ResopnseTwo } from '../../ResponseType'
import { Resource, ResourceCategorieItem } from '@/features/resource'

export interface GetResourceResponse extends ResopnseTwo{
  data: Resource
}

export interface GetResourceCategoriesResponse extends ResopnseTwo {
  data: ResourceCategorieItem[]
}

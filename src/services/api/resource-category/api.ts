import { clientRequest } from '../../request'
import { GetResourceCategoriesResponse } from './type'

export const resourceCategoryApi = {
  getResourceCategories: function ():Promise<GetResourceCategoriesResponse> {
    return clientRequest.get('/boss/resource/category/getAll')
  }
}

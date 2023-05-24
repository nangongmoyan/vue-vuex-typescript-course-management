import { config } from '../../config'
import { clientRequest } from '../../request'
import { GetResourceCategoriesResponse } from './type'

export const resourceCategoryApi = {
  getResourceCategories: function ():Promise<GetResourceCategoriesResponse> {
    return clientRequest.get(`${config.boss}/boss/resource/category/getAll`)
  }
}

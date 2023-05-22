import { clientRequest } from '../../request'
import { ResourceListForm } from '@/features/resource'
import { GetResourceCategoriesResponse, GetResourceResponse } from './type'

export const resourceApi = {
  /**
   *
   * @param data
   * @returns
   */
  getResourcePages: function (data:ResourceListForm):Promise<GetResourceResponse> {
    return clientRequest.post('/boss/resource/getResourcePages', {
      data
    })
  },
  /**
   * 资源分类
   * @param data
   * @returns
   */
  getResourceCategories: function ():Promise<GetResourceCategoriesResponse> {
    return clientRequest.get('/boss/resource/category/getAll')
  }
}

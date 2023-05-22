import { clientRequest } from '../../request'
import { GetRoleOrResourceResponse } from '../common'
import { ResourceListForm } from '@/features/resource'
import { GetAllResourcesResponse, GetResourceCategoriesResponse, GetRoleResourcesResponse } from './type'

export const resourceApi = {
  /**
   *
   * @param data
   * @returns
   */
  getResourcePages: function (data:ResourceListForm):Promise<GetRoleOrResourceResponse> {
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
  },
  /**
   *
   * @returns
   */
  getAllResources: function ():Promise<GetAllResourcesResponse> {
    return clientRequest.get('/boss/resource/getAll')
  },

  /**
   *
   * @param data
   * @returns
   */
  allocateRoleResources: function (data:{roleId:number | string, resourceIdList:number[]}) {
    return clientRequest.post('/boss/resource/allocateRoleResources', data)
  },

  /**
   *
   * @param roleId
   * @returns
   */
  getRoleResources: function (roleId: string | number):Promise<GetRoleResourcesResponse> {
    return clientRequest.get('/boss/resource/getRoleResources', { params: { roleId } })
  }
}

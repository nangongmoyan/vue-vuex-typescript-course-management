
import { MenuForm } from '@/features/menu'
import { clientRequest } from '../../request'
import { ResopnseTwo } from '../..//ResponseType'
import { GetEditMenuInfoResponse, GetRoleMenusResponse, MenuResponse, SaveOrUpdateResponse } from './type'

export const menuApi = {
/**
 *
 * @param data
 * @returns
 */
  saveOrUpdate: function (data: MenuForm) :Promise<SaveOrUpdateResponse> {
    return clientRequest.post('/boss/menu/saveOrUpdate', data)
  },

  /**
 *
 * @returns
 */
  getAll: function ():Promise<MenuResponse> {
    return clientRequest.get('/boss/menu/getAll')
  },

  /**
   *
   * @param {number | string} id
   * @returns
   */
  getEditMenuInfo: function (id: string | number = -1):Promise<GetEditMenuInfoResponse> {
    return clientRequest.get('/boss/menu/getEditMenuInfo', {
      params: { id }
    })
  },

  /**
 * 删除菜单
 * @param {number} id 要删除的菜单id
 * @returns
 */
  delete: function (id: number):Promise<ResopnseTwo> {
    return clientRequest.delete(`/boss/menu/${id}`)
  },

  /**
   *
   * @returns
   */
  getMenuNodeList: function ():Promise<any> {
    return clientRequest.get('/boss/menu/getMenuNodeList')
  },

  /**
   *
   * @param data
   * @returns
   */
  allocateRoleMenus: function (data:any):Promise<any> {
    return clientRequest.post('/boss/menu/allocateRoleMenus', data)
  },

  /**
   *
   * @param roleId
   * @returns
   */
  getRoleMenus: function (roleId:string|number):Promise<GetRoleMenusResponse> {
    return clientRequest.get('/boss/menu/getRoleMenus', { params: { roleId } })
  }
}

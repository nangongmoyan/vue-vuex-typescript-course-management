import { clientRequest } from '@/services/request'
import { GetRoleOrResourceResponse } from '../common'
import { GetRoleByIdResponse } from './type'

export const roleApi = {
  /**
   *
   * @param data
   * @returns
   */
  getRoles: function (data:{current:number, name:string, size:number}):Promise<GetRoleOrResourceResponse> {
    return clientRequest.post('/boss/role/getRolePages', data)
  },
  /**
   *
   * @param id
   * @returns
   */
  deleteRole: function (id: string | number):Promise<any> {
    return clientRequest.delete(`/boss/role/${id}`)
  },
  /**
   *
   * @param data
   * @returns
   */
  saveOrUpdate: function (data:any):Promise<any> {
    return clientRequest.post('/boss/role/saveOrUpdate', data)
  },
  /**
   *
   * @param id
   * @returns
   */
  getRoleById: function (id: string | number):Promise<GetRoleByIdResponse> {
    return clientRequest.get(`/boss/role/${id}`)
  }
}

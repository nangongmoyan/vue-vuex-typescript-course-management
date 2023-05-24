import { config } from '../../config'
import { clientRequest } from '../../request'
import { GetRoleOrResourceResponse } from '../common'
import { GetRolesResponse, GetRoleByIdResponse } from './type'

export const roleApi = {
  /**
   *
   * @param data
   * @returns
   */
  getRoles: function (data:{current:number, name:string, size:number}):Promise<GetRoleOrResourceResponse> {
    return clientRequest.post(`${config.boss}/boss/role/getRolePages`, data)
  },
  /**
   *
   * @param id
   * @returns
   */
  deleteRole: function (id: string | number):Promise<any> {
    return clientRequest.delete(`${config.boss}/boss/role/${id}`)
  },
  /**
   *
   * @param data
   * @returns
   */
  saveOrUpdate: function (data:any):Promise<any> {
    return clientRequest.post(`${config.boss}/boss/role/saveOrUpdate`, data)
  },
  /**
   *
   * @param id
   * @returns
   */
  getRoleById: function (id: string | number):Promise<GetRoleByIdResponse> {
    return clientRequest.get(`${config.boss}/boss/role/${id}`)
  },

  /**
   *
   * @returns
   */
  getAllRoles: function ():Promise<GetRolesResponse> {
    return clientRequest.get(`${config.boss}/boss/role/all`)
  },
  /**
   *
   * @param data
   * @returns
   */
  allocateUserRoles: function (data:any):Promise<any> {
    return clientRequest.post(`${config.boss}/boss/role/allocateUserRoles`, data)
  },
  /**
   *
   * @param userId
   * @returns
   */
  getUserRoles: function (userId: string | number):Promise<GetRolesResponse> {
    return clientRequest.get(`${config.boss}/boss/role/user/${userId}`)
  }
}

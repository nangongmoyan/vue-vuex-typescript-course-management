import { config } from '../../config'
import { clientRequest } from '../../request'
import { GetInfoResponse, GetUserPagesResponse } from './type'

export const userApi = {
  /**
   *
   * @returns
   */
  getInfo: function () :Promise<GetInfoResponse> {
    return clientRequest.get(`${config.front}/front/user/getInfo`)
  },
  /**
   *
   * @param data
   * @returns
   */
  getUserPages: function (data:any):Promise<GetUserPagesResponse> {
    return clientRequest.post(`${config.boss}/boss/user/getUserPages`, data)
  },
  /**
   *
   * @param userId
   * @returns
   */
  forbidUser: function (userId:string| number):Promise<any> {
    return clientRequest.post(`${config.boss}/boss/user/forbidUser`, { params: { userId } })
  }
}

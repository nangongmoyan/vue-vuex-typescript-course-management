import { GetInfoResponse, GetUserPagesResponse } from './type'
import { clientRequest } from '../../request'

export const userApi = {
  /**
   *
   * @returns
   */
  getInfo: function () :Promise<GetInfoResponse> {
    return clientRequest.get('/front/user/getInfo')
  },
  /**
   *
   * @param data
   * @returns
   */
  getUserPages: function (data:any):Promise<GetUserPagesResponse> {
    return clientRequest.post('/boss/user/getUserPages', data)
  },
  /**
   *
   * @param userId
   * @returns
   */
  forbidUser: function (userId:string| number):Promise<any> {
    return clientRequest.post('/boss/user/forbidUser', { params: { userId } })
  }
}

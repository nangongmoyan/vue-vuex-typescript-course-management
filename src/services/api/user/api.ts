import { GetInfoResponse } from './type'
import { clientRequest } from '../../request'

export const userApi = {
  /**
   *
   * @returns
   */
  getInfo: function () :Promise<GetInfoResponse> {
    return clientRequest.get('/front/user/getInfo')
  }
}


import qs from 'qs'
import { config } from '../../config'
import { LoginResponse } from './type'
import { clientRequest } from '../../request'

export const authApi = {
  login: function (data: {phone: string, password: string}) :Promise<LoginResponse> {
    return clientRequest.post(`${config.front}/front/user/login`, qs.stringify(data))
  }
}

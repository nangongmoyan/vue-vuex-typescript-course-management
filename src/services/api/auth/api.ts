
import qs from 'qs'
import { LoginResponse } from './type'
import { clientRequest } from '../../request'

export const authApi = {
  login: function (data: {phone: string, password: string}) :Promise<LoginResponse> {
    return clientRequest.post('/front/user/login', qs.stringify(data))
  }
}

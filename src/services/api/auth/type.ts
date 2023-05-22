import { authApi } from './api'
import { ResopnseOne } from '../../ResponseType'

/** 用户登录数据 */
export type LoginData = Parameters<typeof authApi.login>[0]

export interface LoginResponse extends ResopnseOne {
  content: string;
}

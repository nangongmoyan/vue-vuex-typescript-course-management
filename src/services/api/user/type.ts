import { UserInfo } from '@/features/user'
import { ResopnseOne } from '../../ResponseType'

export interface GetInfoResponse extends ResopnseOne {
  content: UserInfo;
}

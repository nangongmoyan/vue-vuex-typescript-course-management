import { ResopnseOne } from '../../ResponseType'
import { UserInfo, UserPages } from '../../../features/user'

export interface GetInfoResponse extends ResopnseOne {
  content: UserInfo;
}
export interface GetUserPagesResponse extends ResopnseOne {
  data: UserPages;
}

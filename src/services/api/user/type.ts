import { ResopnseOne } from '../../ResponseType'
import { UserInfo, UserPages, UserPermission } from '../../../features/user'

export interface GetInfoResponse extends ResopnseOne {
  content: UserInfo;
}
export interface GetUserPagesResponse extends ResopnseOne {
  data: UserPages;
}
export interface GetUserPermissionsResponse extends ResopnseOne {
  content: UserPermission;
}

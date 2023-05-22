import { ResopnseTwo } from '../../ResponseType'
import { EditMenuInfo, MenuItem, RoleMenuItem } from '../../../features/menu'

export interface MenuResponse extends ResopnseTwo{
  data: MenuItem[]
}
export interface GetEditMenuInfoResponse extends ResopnseTwo{
  data: EditMenuInfo
}
export interface SaveOrUpdateResponse extends ResopnseTwo{
  data: boolean
}

export interface GetRoleMenusResponse extends ResopnseTwo {
  data: RoleMenuItem[]
}

import { EditMenuInfo, MenuItem } from '@/features/menu'
import { ResopnseTwo } from '@/services/ResponseType'

export interface MenuResponse extends ResopnseTwo{
  data: MenuItem[]
}
export interface GetEditMenuInfoResponse extends ResopnseTwo{
  data: EditMenuInfo
}
export interface SaveOrUpdateResponse extends ResopnseTwo{
  data: boolean
}

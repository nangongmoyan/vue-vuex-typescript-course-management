import { ResopnseTwo } from '../../ResponseType'
import { RoleOrResource } from '@/features/common'

export interface GetRoleOrResourceResponse extends ResopnseTwo{
  data: RoleOrResource
}

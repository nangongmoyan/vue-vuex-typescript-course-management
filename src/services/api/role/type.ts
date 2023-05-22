
import { roleApi } from './api'
import { Role } from '../../../features/role'
import { ResopnseTwo } from '../../ResponseType'

export type GetRolesParams = Parameters<typeof roleApi.getRoles>[0]

export interface GetRoleByIdResponse extends ResopnseTwo {
  data: Role
}

export interface GetRolesResponse extends ResopnseTwo {
  data: Role[]
}

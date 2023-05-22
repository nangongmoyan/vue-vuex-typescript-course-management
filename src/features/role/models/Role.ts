import { RecordItem } from '../../common'
import { GetRolesParams } from '../../../services/api'

export interface Role {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  code: string;
  name: string;
  description: string;
}

export interface RoleListData {
  form:GetRolesParams
  records: RecordItem[]
  isLoading: boolean,
  /** 控制添加/编辑角色的对话框显示和隐藏 */
  dialogVisible: boolean,
  /** 编辑角色的 ID */
  roleId: number | null,
  isEdit: boolean
}

export interface CreateOrEditRoleData {
  role: Partial<Role>
}

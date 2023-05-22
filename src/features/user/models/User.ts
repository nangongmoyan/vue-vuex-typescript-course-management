import { Role } from '../../role'

export interface UserInfo {
  /** 用户名称 */
  userName: string;
  /** */
  portrait: string;
  /** */
  isUpdatedPassword: boolean;
}

export enum Status {
  Enable = 'ENABLE',
}

export interface RecordTwoItem {
  id: number;
  name: string;
  portrait: null | string;
  phone: string;
  password: string;
  regIp: null;
  accountNonExpired: boolean;
  credentialsNonExpired: boolean;
  accountNonLocked: boolean;
  status: Status;
  isDel: boolean;
  createTime: string;
  updateTime: string;
}

export interface UserPages {
  records: RecordTwoItem[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  hitCount: boolean;
  searchCount: boolean;
  pages: number;
}

export interface UserListFilterParams {
  currentPage: number,
  pageSize: number,
  phone: string,
  startCreateTime: string,
  endCreateTime: string,
  rangeDate: string[]
}

export interface UserListData {
  users: RecordTwoItem[]
  filterParams: UserListFilterParams
  roles: Role[]
  isLoading: boolean,
  dialogVisible: boolean,
  roleIdList: number[]
  currentUser: RecordTwoItem | null
}

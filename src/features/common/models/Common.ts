
export interface RecordItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  name: string;
  categoryId: number;
  url: string;
  description: string;
  selected?: boolean;
}

export interface RoleOrResource {
  records: RecordItem[];
  total: number;
  size: number;
  current: number;
  orders: any[];
  optimizeCountSql: boolean;
  hitCount: boolean;
  searchCount: boolean;
  pages: number;
}

export enum Icon {
  Film = 'film',
  Lock = 'lock',
  Setting = 'setting',
  User = 'user',
}

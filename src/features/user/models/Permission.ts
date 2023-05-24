import { Icon } from '../../common'

export interface MenuList {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  parentId: number;
  name: string;
  href: string;
  icon: Icon;
  orderNum: number;
  description: string;
  shown: boolean;
  level: number;
  selected: boolean;
  subMenuList: MenuList[] | null;
}

export interface ResourceList {
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
  selected: boolean;
}

export interface UserPermission {
  menuList: MenuList[];
  resourceList: ResourceList[];
}

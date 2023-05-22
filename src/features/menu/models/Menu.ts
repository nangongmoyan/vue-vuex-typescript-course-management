
export interface MenuItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  parentId: number;
  name: string;
  href: string;
  icon: string;
  orderNum: number;
  description: string;
  shown: boolean;
  level: number;
}

export type MenuForm = Pick<MenuItem, 'parentId'|'name'|'href'|'icon'|'orderNum'| 'description'|'shown'>

export interface MenuIndexData {
  menus: MenuItem[]
}

export interface MenuListItem extends MenuItem {
  selected: boolean;
  subMenuList: MenuListItem[] | null;
}

export interface EditMenuInfo {
  menuInfo: null;
  parentMenuList: MenuListItem[];
}

export interface MenuCreateOrEditData {
  form: MenuForm
  parentMenuList: MenuListItem[]
}

export enum Icon {
  Film = 'film',
  Lock = 'lock',
  Setting = 'setting',
  User = 'user',
}

export interface RoleMenuItem {
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
  subMenuList: RoleMenuItem[] | null;
}

export interface AllocMenuData {
  menus: RoleMenuItem[]
  checkedKeys: number[]
  defaultProps: {
    children: 'subMenuList',
    label: 'name'
  },
}

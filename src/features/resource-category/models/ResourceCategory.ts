export interface ResourceCategorieItem {
  id: number;
  createdBy: string;
  updatedBy: string;
  createdTime: string;
  updatedTime: string;
  operatorId: null;
  name: string;
  sort: number;
  selected: boolean;
  children?:any[]
}

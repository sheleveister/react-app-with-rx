export interface ITableUser extends IUser {
  key: string;
}

export interface IUser {
  name: string;
  id: string;
  address: string;
  age: number;
  note: string;
}

export type TUserToAdd = Omit<IUser, 'id'>;

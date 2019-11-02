export interface User {
  id: string;
  key: string;
  name: string;
  age: number;
  address: string;
  note: string;
}

export interface IUser {
  name: string;
  id: string;
  address: string;
  age: number;
  note: string;
}

export type TUserToAdd = Omit<IUser, 'id'>;

import { Column } from '../models/table';
import { InputType, RawItem, TModelToInput } from '../models/common';
import { IUser } from '../models/user';

export const columns: Column[] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'Note',
    dataIndex: 'note',
    key: 'note',
  },
];

export const defaultUserCard: RawItem<IUser> = {
  name: '',
  address: '',
  age: undefined,
  note: '',
};

export const mapUserToInput: TModelToInput<RawItem<IUser>> = {
  name: {
    type: InputType.text,
    placeholder: 'Name',
  },
  address: {
    type: InputType.text,
    placeholder: 'Address',
  },
  note: {
    type: InputType.text,
    placeholder: 'Note',
  },
  age: {
    type: InputType.number,
    placeholder: 'Age',
  },
}

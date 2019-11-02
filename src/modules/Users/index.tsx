import React, { Component } from 'react';
import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { Column } from '../../models/table';
import { User } from '../../models/user';
import './Users.scss';


const columns: Column[] = [
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

const data: User[] = [
  {
    id: '1',
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    note: 'developer',
  },
  {
    id: '2',
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    note: 'loser',
  },
  {
    id: '3',
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    note: 'teacher',
  },
];

type UsersPropsType = {};

class Users extends Component<UsersPropsType> {
  render() {
    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
        />
        <TableComponent<User>
          columns={columns}
          data={data}
        />
      </div>
    )
  }
}

export default Users;

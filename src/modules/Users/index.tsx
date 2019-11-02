import React, { Component } from 'react';
import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { Column } from '../../models/table';
import { ITableUser, IUser } from '../../models/user';
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

export type UsersPropsType = {
  users: IUser[];
};

class Users extends Component<UsersPropsType> {
  getMappedData = () => {
    const {users} = this.props;
    return users.map((user) => {
      return {
        key: user.id,
        ...user,
      }
    });
  }

  render() {
    const data = this.getMappedData();

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
        />
        <TableComponent<ITableUser>
          columns={columns}
          data={data}
        />
      </div>
    )
  }
}

export default Users;

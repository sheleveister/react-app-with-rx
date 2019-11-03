import React, { Component } from 'react';

import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { IUser } from '../../models/user';
import { columns } from '../../utils/users.utils';

import { UsersPropsType } from './Users.types';
import './Users.scss';


class Users extends Component<UsersPropsType> {
  render() {
    const { users } = this.props;

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
        />
        <TableComponent<IUser>
          columns={columns}
          data={users}
        />
      </div>
    )
  }
}

export default Users;

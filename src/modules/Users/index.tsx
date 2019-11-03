import React, { Component } from 'react';

import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { IUser } from '../../models/user';
import { columns } from '../../utils/users.utils';

import './Users.scss';

export type UsersPropsType = {
  users: IUser[];
};


class Users extends Component<UsersPropsType> {
  render() {
    const { users } = this.props;

    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
          handleOnClick={() => {}}
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

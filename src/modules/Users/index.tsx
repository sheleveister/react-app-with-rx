import React, { Component } from 'react';
import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { ITableUser, IUser } from '../../models/user';
import { columns } from '../../utils/users.utils';
import { UsersPropsType } from './Users.types';
import { getTableDataWithKey } from '../../utils/common.utils';
import './Users.scss';


class Users extends Component<UsersPropsType> {
  render() {
    const { users } = this.props;
    const data = getTableDataWithKey<IUser>(users);

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

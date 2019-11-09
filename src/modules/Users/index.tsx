import React, { Component } from 'react';

import TableComponent from '../../components/Table/index';
import TableControls from '../../components/TableControls/index';
import { IUser } from '../../models/user';
import { columns, mapUserToInput } from '../../utils/users.utils';
import { UserModalContainer } from '../../containers/UserModalContainer';

import './Users.scss';

export type UsersPropsType = {
  users: IUser[];
  openModal: () => void;
};

class Users extends Component<UsersPropsType> {
  render() {
    const { users } = this.props;
    return (
      <div className="Container">
        <TableControls
          buttonText="Create new User"
          iconTitle="Delete User"
          handleOnClick={this.props.openModal}
        />
        <TableComponent<IUser>
          columns={columns}
          data={users}
        />
        <UserModalContainer
          mapModelToInput={mapUserToInput}
        />
      </div>
    )
  }
}

export default Users;

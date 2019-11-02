import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import Users, { UsersPropsType } from '../../modules/Users';
import { userService } from '../../services/user.service';

export const UsersContainer = withRX<UsersPropsType>(Users)(() => {
  const users$ = userService.getUsers();

  return {
    defaultProps: {
      users: [],
   },
    props: {
      users: users$,
    },
  }
});

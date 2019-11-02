import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import Users from '../modules/Users';
import { userService } from '../services/user.service';
import { UsersPropsType } from '../modules/Users/Users.types';

export const UsersContainer = withRX<UsersPropsType>(Users)(() => {
  const users$ = userService.get();

  return {
    defaultProps: {
      users: [],
   },
    props: {
      users: users$,
    },
  }
});

import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { merge } from 'rxjs';

import Users, { UsersPropsType } from '../modules/Users';
import { userModalViewModel } from '../viewModels/userModal.viewModel';
import { usersViewModel } from '../viewModels/users.viewModel';

export const UsersContainer = withRX<UsersPropsType>(Users)(() => {
  const {
    toggleModal
  } = userModalViewModel;

  const { users$, saveEffects$ } = usersViewModel;

  return {
    defaultProps: {
      users: [],
      openModal: () => toggleModal(true),
   },
    props: {
      users: users$,
    },
    effects$: merge(
      saveEffects$,
  ),
  }
});

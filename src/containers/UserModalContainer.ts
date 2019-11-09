import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { map } from 'rxjs/operators';

import { userModalViewModel } from '../viewModels/userModal.viewModel';
import { usersViewModel } from '../viewModels/users.viewModel';
import UserModalCard, { UserModalCardPropsType } from '../modules/Users/UserModalCard';
import { defaultUserCard } from '../utils/users.utils';

export const UserModalContainer = withRX<UserModalCardPropsType>(UserModalCard)(() => {
  const {
    isOpened$,
    toggleModal,
    cardControls$,
    onValueChange,
    isPending$,
  } = userModalViewModel;

  const {addUser} = usersViewModel;

  return {
    defaultProps: {
      isOpened: false,
      toggleModal,
      onValueChange,
      onSave: addUser,
      cardControls: defaultUserCard,
      isPending: false,
    },
    props: {
      isOpened: isOpened$,
      isPending: isPending$,
      cardControls: cardControls$,
    },
  }
});

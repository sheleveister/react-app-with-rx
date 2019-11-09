import { BehaviorSubject } from 'rxjs';

import { IUser } from '../models/user';
import { RawItem } from '../models/common';
import { defaultUserCard } from '../utils/users.utils';

import { CommonModalViewModel } from './common-types';

type UserModalViewModel = CommonModalViewModel<RawItem<IUser>>;

export const createUserModalViewModel = (): UserModalViewModel => {
  const isOpenedSubject = new BehaviorSubject<boolean>(false);
  const isOpened$ = isOpenedSubject.asObservable();
  const toggleModal = (flag: boolean) => {
    isOpenedSubject.next(flag);
    if (!flag) {
      onValueChange(defaultUserCard);
    }
  }

  const isPendingSubject = new BehaviorSubject<boolean>(false);
  const isPending$ = isPendingSubject.asObservable();
  const setIsPending = (flag: boolean) => isPendingSubject.next(flag);

  const cardControlsSubject = new BehaviorSubject<RawItem<IUser>>(defaultUserCard);
  const cardControls$ = cardControlsSubject.asObservable();
  const onValueChange = (value: RawItem<IUser>) => cardControlsSubject.next(value);

  return {
    isOpened$,
    toggleModal,
    cardControls$,
    onValueChange,
    isPending$,
    setIsPending,
  }
};

export const userModalViewModel = createUserModalViewModel();

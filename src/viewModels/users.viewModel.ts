import { combineLatest, Observable, Subject } from "rxjs";
import { startWith, switchMap, tap } from "rxjs/operators";

import { IUser } from "../models/user";
import { userService } from "../services/user.service";
import { RawItem } from "../models/common";

import { userModalViewModel } from "./userModal.viewModel";

interface UsersViewModel {
  users$: Observable<IUser[]>;
  addUser: (user: RawItem<IUser>) => void;
  saveEffects$: Observable<unknown>;
}

export const createUsersViewModel = (): UsersViewModel => {
  const usersSaveHandler$ = new Subject<RawItem<IUser>>();
  const usersSaveEffects$ = usersSaveHandler$.pipe(
    tap(() => userModalViewModel.setIsPending(true)),
    switchMap((user: RawItem<IUser>) =>  userService.post(user)),
    tap(() => userModalViewModel.setIsPending(false)),
    // @TODO error handler
    tap(() => userModalViewModel.toggleModal(false)),
    
  );

  const users$ = usersSaveEffects$.pipe(
    startWith(null),
    switchMap(() => userService.get()),
  );

  const addUser = (user: RawItem<IUser>) => {
    usersSaveHandler$.next(user);
  }

  const mergedEffects$ = combineLatest(
    usersSaveEffects$,
  );

  return {
    users$,
    saveEffects$: mergedEffects$,
    addUser,
  }
}

export const usersViewModel = createUsersViewModel();

import { Observable } from "rxjs";

import { RawItem, THasId } from "../models/common";

export interface CommonModalViewModel<T> {
  isOpened$: Observable<boolean>;
  toggleModal: (flag: boolean) => void;
  cardControls$: Observable<T>;
  onValueChange: (value: T) => void;
  isPending$: Observable<boolean>;
  setIsPending: (flag: boolean) => void;
}

export interface CommonViewModel<T extends THasId> {
  list$: Observable<T[]>;
  add: (user: RawItem<T>) => void;
  saveEffects$: Observable<unknown>;
}

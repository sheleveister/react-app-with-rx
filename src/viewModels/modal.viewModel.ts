import { BehaviorSubject, merge, Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

interface ModalViewModel<TypeToAdd> {
  isVisible$: Observable<boolean>;
  setIsVisible: (flag: boolean) => void;
  cardControls$: Observable<TypeToAdd | undefined>;
  onValueChange: (value: TypeToAdd) => void;
}


export const createModalViewModel = <TypeToAdd>(): ModalViewModel<TypeToAdd> => {
  const isVisibleSubject = new BehaviorSubject<boolean>(false);
  const isVisible$ = isVisibleSubject.asObservable();
  const setIsVisible = (flag: boolean) => {  // open / close modal window
    isVisibleSubject.next(flag);
    if (!flag) {
      onValueChange(undefined);
    }
  }

  const cardControlsSubject = new BehaviorSubject<TypeToAdd| undefined>(undefined);
  const cardControls$ = cardControlsSubject.asObservable();
  const onValueChange = (value:  TypeToAdd | undefined) => cardControlsSubject.next(value);

  return {
    isVisible$,
    cardControls$,
    setIsVisible,
    onValueChange,
  }
};


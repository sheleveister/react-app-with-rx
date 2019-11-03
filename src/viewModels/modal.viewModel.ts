import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take, takeLast } from 'rxjs/operators';

interface TracksViewModel {
  isVisible$: Observable<boolean>;
  setIsVisible: (flag: boolean) => void;
  // handleCancel: Observable<() => void>;
  cardControls$: any;
  onValueChange: (value: any) => void;
}

const createTracksViewModel = (): TracksViewModel => {
  const cardControls: any = {
    name: '',
    author: '',
    duration: '',
    year: '',
  };

  const isVisibleSubject = new BehaviorSubject<boolean>(false);
  const cardControlsSubject = new BehaviorSubject<any>(cardControls);

  const isVisible$ = isVisibleSubject.asObservable();
  const setIsVisible = (flag: boolean) => isVisibleSubject.next(flag);
  const cardControls$ = cardControlsSubject.asObservable();

  const onValueChange = (value: any) => {
    cardControlsSubject.next(value);
  }

  return {
    isVisible$,
    setIsVisible,
    cardControls$,
    onValueChange,
  }
};

export const trackViewModel = createTracksViewModel();

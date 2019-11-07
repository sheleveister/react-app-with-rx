import { BehaviorSubject, Observable } from 'rxjs';
import { TTrackToAdd } from '../models/track';

interface TracksViewModel {
  isVisible$: Observable<boolean>;
  setIsVisible: (flag: boolean) => void;
  cardControls$: Observable<TTrackToAdd>;
  onValueChange: (value: any) => void;
}

const createTracksViewModel = (): TracksViewModel => {
  const cardControls: TTrackToAdd = {
    name: '',
    author: '',
    duration: null,
    year: null,
  };

  const isVisibleSubject = new BehaviorSubject<boolean>(false);
  const cardControlsSubject = new BehaviorSubject<TTrackToAdd>(cardControls);

  const isVisible$ = isVisibleSubject.asObservable();
  const cardControls$ = cardControlsSubject.asObservable();

  const setIsVisible = (flag: boolean) => isVisibleSubject.next(flag);

  const onValueChange = (value: TTrackToAdd) => {
    cardControlsSubject.next(value);
  };

  return {
    isVisible$,
    cardControls$,
    setIsVisible,
    onValueChange,
  }
};

export const trackViewModel = createTracksViewModel();

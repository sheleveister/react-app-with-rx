import { BehaviorSubject } from 'rxjs';

import { ITrack, RawItem } from '../models/track';
import { defaultTrackCard } from '../utils/tracks.utils';

import { CommonModalViewModel } from './common-types';

type TrackModalViewModel = CommonModalViewModel<RawItem<ITrack>>;

export const createTrackModalViewModel = (): TrackModalViewModel => {
  const isOpenedSubject = new BehaviorSubject<boolean>(false);
  const isOpened$ = isOpenedSubject.asObservable();
  const toggleModal = (flag: boolean) => {
    isOpenedSubject.next(flag);
    if (!flag) {
      setIsPending(false);
      onValueChange(defaultTrackCard);
    }
  }

  const isPendingSubject = new BehaviorSubject<boolean>(false);
  const isPending$ = isPendingSubject.asObservable();
  const setIsPending = (flag: boolean) => {
    isPendingSubject.next(flag);
  }

  const cardControlsSubject = new BehaviorSubject<RawItem<ITrack>>(defaultTrackCard);
  const cardControls$ = cardControlsSubject.asObservable();
  const onValueChange = (value: RawItem<ITrack>) => cardControlsSubject.next(value);

  return {
    isOpened$,
    cardControls$,
    toggleModal,
    onValueChange,
    isPending$,
    setIsPending,
  }
};

export const trackModalViewModel = createTrackModalViewModel();

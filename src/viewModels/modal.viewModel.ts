import { BehaviorSubject, Observable, of } from 'rxjs';
import { map, take, takeLast } from 'rxjs/operators';

interface TracksViewModel {
  isVisible: Observable<boolean>;
  setIsVisible: Observable<(flag: boolean) => void>;
  // handleCancel: Observable<() => void>;
  cardControls: any;
  onValueChange: Observable<(flag: string, value: string) => void>;
}

const createTracksViewModel = (): TracksViewModel => {
  let cardControls: any = {
    name: '',
    author: '',
    duration: '',
    year: '',
  };

  const isVisibleSubject = new BehaviorSubject<boolean>(false);
  const cardControlsSubject = new BehaviorSubject<any>(cardControls);

  const isVisible$ = isVisibleSubject.asObservable();
  const setIsVisible = of((flag: boolean) => isVisibleSubject.next(flag));
  const cardControls$ = cardControlsSubject.asObservable();


  // const onValueChange = cardControls$.pipe(
  //   takeLast(1),
  //   map((card) => {
  //     console.log('current card value: ', card);
  //     const changeValue = (flag: string, value: string) => {
  //       const newCardControlValue = {
  //         ...card,
  //         [flag]: value,
  //       };
  //
  //       console.log('new card value: ', newCardControlValue);
  //
  //       cardControlsSubject.next(newCardControlValue);
  //     }
  //
  //     return changeValue;
  //   })
  // );

  const onValueChange = of((flag: string, value: string) => {
    const updatedCardControls = {
      ...cardControls,
      [flag]: value,
    };

    cardControlsSubject.next(updatedCardControls);
    cardControls = updatedCardControls;
  });


  return {
    isVisible: isVisible$,
    setIsVisible,
    cardControls: cardControls$,
    onValueChange,
  }
};

export const trackViewModel = createTracksViewModel();

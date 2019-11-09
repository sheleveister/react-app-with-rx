import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { merge } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import Tracks, { TracksPropsType } from '../modules/Tracks';
import { createModalViewModel } from '../viewModels/modal.viewModel';
import { createTracksViewModel } from '../viewModels/tracks.view-model';
import { TTrackToAdd } from '../models/track';

export const defaultCardControls: TTrackToAdd = {
  name: '',
  author: '',
  duration: undefined,
  year: undefined,
};

export const TracksContainer = withRX<TracksPropsType>(Tracks)(() => {
  const trackViewModel = createTracksViewModel();
  const modalViewModel = createModalViewModel<TTrackToAdd>();

  const {
    isVisible$,
    setIsVisible,
    cardControls$,
    onValueChange,
  } = modalViewModel;

  const {
    saveEffects$,
    tracks$,
    addTrack,
  } = trackViewModel;

  const onSaveEffects$ = saveEffects$.pipe(
    tap(() => setIsVisible(false)),
  );

  return {
    defaultProps: {
      tracks: [],
      isVisible: false,
      setIsVisible,
      onValueChange,
      saveCard: addTrack,
      cardControls: defaultCardControls,
    },
    props: {
      tracks: tracks$,
      isVisible: isVisible$,
      cardControls: cardControls$.pipe(
        map((value: TTrackToAdd | undefined) => {
          if (value === undefined) {
            return defaultCardControls;
          }
          return value;
        }),
      )
    },
    effects$: merge(
        onSaveEffects$,
    ),
  }
});

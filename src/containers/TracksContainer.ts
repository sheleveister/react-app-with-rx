import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';

import { trackService } from '../services/track.service';
import Tracks, { TracksPropsType } from '../modules/Tracks';
import { trackViewModel } from '../viewModels/modal.viewModel';
import { TTrackToAdd } from '../models/track';

export const defaultCardControls: TTrackToAdd = {
  name: '',
  author: '',
  duration: null,
  year: null,
};

export const TracksContainer = withRX<TracksPropsType>(Tracks)(() => {
  const {
    isVisible$,
    setIsVisible,
    cardControls$,
    onValueChange,
  } = trackViewModel;

  const tracks$ = trackService.get();

  // const savedData$ = trackService.post();

  const saveCard = (cardData: TTrackToAdd): void => {
    const res = trackService.post(cardData);
    setIsVisible(false);
    onValueChange(defaultCardControls);

    console.log('cardData to save', cardData);
    console.log('res', res);
    console.log('tracks$', tracks$);
  };

  return {
    defaultProps: {
      tracks: [],
      isVisible: false,
      setIsVisible,
      handleCancel: () => null,
      onValueChange,
      saveCard,
      cardControls: defaultCardControls,
    },
    props: {
      tracks: tracks$,
      isVisible: isVisible$,
      cardControls: cardControls$,
      // saveCard,
    },
  }
});

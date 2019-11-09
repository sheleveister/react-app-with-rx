import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { map } from 'rxjs/operators';

import { trackModalViewModel } from '../viewModels/trackModal.viewModel';
import { tracksViewModel } from '../viewModels/tracks.viewModel';
import TrackModalCard, { TrackModalCardPropsType } from '../modules/Tracks/TrackModalCard';
import { defaultTrackCard } from '../utils/tracks.utils';

export const TrackModalContainer = withRX<TrackModalCardPropsType>(TrackModalCard)(() => {
  const {
    isOpened$,
    toggleModal,
    cardControls$,
    onValueChange,
    isPending$,
  } = trackModalViewModel;

  const {addTrack} = tracksViewModel;
  return {
    defaultProps: {
      isOpened: false,
      toggleModal,
      onValueChange,
      onSave: addTrack,
      cardControls: defaultTrackCard,
      isPending: false,
    },
    props: {
      isOpened: isOpened$,
      isPending: isPending$,
      cardControls: cardControls$,
    },
  }
});

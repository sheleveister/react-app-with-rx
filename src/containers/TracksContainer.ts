import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { merge } from 'rxjs';

import Tracks, { TracksPropsType } from '../modules/Tracks';
import { trackModalViewModel } from '../viewModels/trackModal.viewModel';
import { tracksViewModel } from '../viewModels/tracks.viewModel';

export const TracksContainer = withRX<TracksPropsType>(Tracks)(() => {
  const {
    toggleModal,
  } = trackModalViewModel;

  const { saveEffects$, tracks$ } = tracksViewModel;


  return {
    defaultProps: {
      tracks: [],
      openModal: () => toggleModal(true),
    },
    props: {
      tracks: tracks$,
    },
    effects$: merge(
      saveEffects$,
    ),
  }
});

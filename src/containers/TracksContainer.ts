import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';

import { trackService } from '../services/track.service';
import Tracks, { TracksPropsType } from '../modules/Tracks';
import { trackViewModel } from '../viewModels/modal.viewModel';

export const TracksContainer = withRX<TracksPropsType>(Tracks)(() => {
  const tracks$ = trackService.get();
  const {
    isVisible,
    setIsVisible,
    cardControls,
    onValueChange,
  } = trackViewModel;


  return {
    defaultProps: {
      tracks: [],
      isVisible: false,
      setIsVisible: () => null,
      handleCancel: () => null,
      onValueChange: () => {},
      cardControls: {
        name: '',
        author: '',
        duration: '',
        year: '',
      },
    },
    props: {
      tracks: tracks$,
      isVisible,
      setIsVisible,
      cardControls,
      onValueChange,
    },
  }
});

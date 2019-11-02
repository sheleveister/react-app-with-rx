import { withRX } from '@devexperts/react-kit/dist/utils/with-rx2';
import { trackService } from '../services/track.service';
import { TracksPropsType } from '../modules/Tracks/Tracks.types';
import Tracks from '../modules/Tracks';

export const TracksContainer = withRX<TracksPropsType>(Tracks)(() => {
  const tracks$ = trackService.get();

  return {
    defaultProps: {
      tracks: [],
    },
    props: {
      tracks: tracks$,
    },
  }
});

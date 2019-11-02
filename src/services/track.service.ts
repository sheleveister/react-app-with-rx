import { firebaseClient } from '../api/firebaseClient';
import { CollectionType } from '../models/firebase';
import { ITrack, TTrackToAdd } from '../models/track';

import { FirebaseCrudService } from './firebaseCrud.service';


const trackService = new FirebaseCrudService<ITrack, TTrackToAdd>(
  firebaseClient, CollectionType.tracks
);

export { trackService };

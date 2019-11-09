import { firebaseClient } from '../api/firebaseClient';
import { CollectionType } from '../models/firebase';
import { ITrack} from '../models/track';

import { FirebaseCrudService } from './firebaseCrud.service';


const trackService = new FirebaseCrudService<ITrack>(
  firebaseClient, CollectionType.tracks
);

export { trackService };

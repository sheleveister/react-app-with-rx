import { CollectionType } from '../models/firebase';
import { firebaseClient } from '../api/firebaseClient';
import { IUser } from '../models/user';

import { FirebaseCrudService } from './firebaseCrud.service';

const userService = new FirebaseCrudService<IUser>(
  firebaseClient, CollectionType.users
);

export { userService };

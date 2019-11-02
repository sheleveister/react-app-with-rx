import { IUser, TUserToAdd } from '../models/user';
import { CollectionType } from '../models/firebase';
import { firebaseClient } from '../api/firebaseClient';

import { FirebaseCrudService } from './firebaseCrud.service';


const userService = new FirebaseCrudService<IUser, TUserToAdd>(
  firebaseClient, CollectionType.users
);

export { userService };

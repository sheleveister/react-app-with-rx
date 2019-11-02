import { firebaseClient } from '../api/firebaseClient';
import { Observable } from 'rxjs';
import { TUserToAdd, IUser } from '../models/user';
import { CollectionType } from '../models/firebase';

// @TODO think about making service creator and passing client there
export namespace UserService {
  export const getUsers = (): Observable<IUser[]> => firebaseClient.get<IUser[]>({ url: CollectionType.users });

  export const getUser = (userId: number): Observable<IUser> => firebaseClient
    .get<IUser>({ url: `${CollectionType.users}/${userId}` });

  export const addUser = (user: TUserToAdd) => firebaseClient
    .post({ url: CollectionType.users, body: user });

  export const removeUser = (userId: string) => firebaseClient
    .post({ url: `${CollectionType.users}/${userId}`});

  export const editUser = (userId: string, newUser: TUserToAdd) => firebaseClient
    .put({ url: `${CollectionType.users}/${userId}`, body: newUser });
}

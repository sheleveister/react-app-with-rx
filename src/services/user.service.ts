import { Observable } from 'rxjs';
import { TUserToAdd, IUser } from '../models/user';
import { CollectionType } from '../models/firebase';
import { ApiClient } from '../api/apiClient';
import { firebaseClient } from '../api/firebaseClient';

// @TODO think about making service creator and passing client there
class UserService {
  private client: ApiClient;

  constructor(client: ApiClient) {
    this.client = client;
  }
  getUsers = (): Observable<IUser[]> => this.client
    .get<IUser[]>({ url: CollectionType.users });

  getUser = (userId: string): Observable<IUser> => this.client
    .get<IUser>({ url: `${CollectionType.users}/${userId}` });

  addUser = (user: TUserToAdd) => this.client
    .post<IUser>({ url: CollectionType.users, body: user });

  removeUser = (userId: string) => this.client
    .remove<string>({ url: `${CollectionType.users}/${userId}`});

  editUser = (userId: string, newUser: TUserToAdd) => this.client
    .put<IUser>({ url: `${CollectionType.users}/${userId}`, body: newUser });
}

const userService = new UserService(firebaseClient);

export {userService};

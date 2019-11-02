import {firebaseClient} from '../api/firebaseClient';
import { Observable } from 'rxjs';

interface IUser {
    name: string;
    id: string;
    address: string;
    age: number;
    note: string;
}

type TUserToAdd = Omit<IUser, 'id'>;

export namespace UserService {
    export const getUsers = (): Observable<IUser[]>  => firebaseClient.get<IUser[]>({url: 'users'});

    export const getUser = (userId: number): Observable<IUser>  => firebaseClient
        .get<IUser>({url: `users/${userId}`});

    export const addUser = (user: TUserToAdd) => firebaseClient
        .post({url: 'user', body: user});

    export const removeUser = (user: TUserToAdd) => firebaseClient
        .post({url: 'user', body: user});

    export const editUser = (newUser: TUserToAdd) => firebaseClient
        .put({url: 'user', body: newUser});
}
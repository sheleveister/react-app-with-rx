import firebase from './firebase';
import { Observable, from, of, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { buildUrl, FullApiRequest, ApiRequest, ApiClient } from './apiClient';
import { fromFirebaseSnapshot } from '../utils/firebase.utils';
import {FirebaseParams, CollectionType } from '../models/firebase';

const createFirebaseClient = (): ApiClient => {
  const errorSubj$ = new Subject<Error>();
  const error$ = errorSubj$.asObservable();

  const parseUrl = (url: string): FirebaseParams => {
    const u = url.split('/');
    if (u[0] === '') {
      throw new Error("Don't start with slash literal!");
    }

    const collectionName = u[0] as CollectionType;
    const itemId: string | undefined = u[1];
    let params: FirebaseParams;

    if (Object.values(CollectionType).includes(collectionName)) {
      params = { collectionName };
    } else {
      throw new Error('The url does not contains existed collection name');
    }

    if (itemId !== undefined) {
      params.itemId = itemId;
    }
    return params;
  }

  const request = <R = never>(request: FullApiRequest): Observable<R> => {
    const url = `${buildUrl(request.url, request.query)}`;
    const { method, body } = request;
    const { collectionName, itemId } = parseUrl(url);

    const ref = firebase.firestore().collection(collectionName);

    switch (method) {
      case 'GET': {
        if (itemId !== undefined) {
          return from(ref.doc(itemId).get()).pipe(
            map((items) => items as unknown as R),
          );
        }
        return fromFirebaseSnapshot<R>(ref).pipe(
          map((items) => items as unknown as R),
        );
      }
      case 'POST': {
        return from(ref.add(body as Object)).pipe(
          map(item => ({ ...body, id: item.id } as unknown as R)),
        )
      }

      case 'DELETE': {
        // @TODO handle itemId === undefined
        return from(ref.doc(itemId).delete()).pipe(
          map(() => ({ itemId }) as unknown as R),
        );
      }

      case 'PUT': {
        // @TODO handle itemId === undefined
        return from(ref.doc(itemId).set(body as Object)).pipe(
          map(item => item as unknown as R),
        );
      }

      default: {
        errorSubj$.next(new Error('Incorrect method!'));
        return of(undefined as unknown as R);
      }
    }
  }
  const get = <R = never>(apiRequest: ApiRequest): Observable<R> => {
    return request({
      ...apiRequest,
      method: 'GET',
    });
  }

  const post = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'POST',
    });
  };

  const remove = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'DELETE',
    });
  };

  const put = <Response = never>(apiRequest: ApiRequest): Observable<Response> => {
    return request({
      ...apiRequest,
      method: 'PUT',
    });
  };

  return {
    error$,
    request,
    get,
    put,
    post,
    remove,
  };
};

const firebaseClient = createFirebaseClient();

export { firebaseClient };

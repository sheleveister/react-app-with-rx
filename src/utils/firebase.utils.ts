import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import firebase from 'firebase/app';
import 'firebase/firestore';

export const fromFirebaseSnapshot = <T>(ref: firebase.firestore.CollectionReference): Observable<T> => {
  return new Observable<T>(observer => {
    ref.onSnapshot(items => {
      const mappedItems: unknown[] = [];
      items.forEach(item => {
        if (item.exists) {
          mappedItems.push({...item.data(), id: item.id});
        } else {
          observer.error(new Error('Item does not exists!'));
        }
      });
      observer.next(mappedItems as unknown as T)
    })
  }).pipe(take(1))
};

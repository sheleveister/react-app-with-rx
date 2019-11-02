import { Observable } from 'rxjs';

import { CollectionType } from '../models/firebase';
import { ApiClient } from '../api/apiClient';


export class FirebaseCrudService<T, R> {
  private readonly client: ApiClient;
  private readonly collectionType: CollectionType;

  constructor(
    client: ApiClient,
    collectionType: CollectionType,
  ) {
    this.client = client;
    this.collectionType = collectionType;
  }

  get = (): Observable<T[]> => this.client
    .get<T[]>({ url: this.collectionType });

  getById = (id: string): Observable<T> => this.client
    .get<T>({ url: `${this.collectionType}/${id}`});

  post = (item: R) => this.client
    .post<T>({ url: this.collectionType, body: item });

  delete = (id: string) => this.client
    .remove<string>({ url: `${this.collectionType}/${id}`});

  put = (id: string, newItem: R) => this.client
    .put<T>({ url: `${this.collectionType}/${id}`, body: newItem });
}

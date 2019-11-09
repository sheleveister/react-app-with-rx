import { Observable } from 'rxjs';

import { CollectionType } from '../models/firebase';
import { ApiClient } from '../api/apiClient';
import { RawItem, THasId } from '../models/common';


export class FirebaseCrudService<EntityType extends THasId> {
  private readonly client: ApiClient;
  private readonly collectionType: CollectionType;

  constructor(
    client: ApiClient,
    collectionType: CollectionType,
  ) {
    this.client = client;
    this.collectionType = collectionType;
  }

  get = (): Observable<EntityType[]> => this.client
    .get<EntityType[]>({ url: this.collectionType });

  getById = (id: string): Observable<EntityType> => this.client
    .get<EntityType>({ url: `${this.collectionType}/${id}`});

  post = (item: RawItem<EntityType>) => this.client
    .post<EntityType>({ url: this.collectionType, body: item });

  delete = (id: string) => this.client
    .remove<string>({ url: `${this.collectionType}/${id}`});

  put = (id: string, newItem: RawItem<EntityType>) => this.client
    .put<EntityType>({ url: `${this.collectionType}/${id}`, body: newItem });
}

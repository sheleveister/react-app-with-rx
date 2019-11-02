export enum CollectionType {
  users = 'users',
  tracks = 'tracks',
}

export interface FirebaseParams {
  collectionName: CollectionType;
  itemId?: string;
}

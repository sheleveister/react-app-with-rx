export interface ITrack {
  id: string;
  name: string;
  author: string;
  duration: number|undefined;
  year: number|undefined;
}

export type RawItem<ITrack> = Omit<ITrack, 'id'>;

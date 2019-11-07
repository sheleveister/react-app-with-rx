export interface ITrack {
  id: string;
  name: string;
  author: string;
  duration: number|null;
  year: number|null;
}

export type TTrackToAdd = Omit<ITrack, 'id'>;

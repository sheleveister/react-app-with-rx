export interface ITrack {
  id: string;
  name: string;
  author: string;
  duration: number;
  year: number;
}

export type TTrackToAdd = Omit<ITrack, 'id'>;

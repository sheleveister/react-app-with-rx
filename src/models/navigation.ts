export enum RouterLinks {
  Users = '/users',
  Tracks = '/tracks',
}

export interface INavigation {
  key: string;
  link: RouterLinks;
  icon: string;
  name: string;
}

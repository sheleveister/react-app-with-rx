import { INavigation, RouterLinks } from '../models/navigation';

export const DEFAULT_NAV_LINK = 'user';

export const navigation: INavigation[] = [
  {
    key: "user",
    link: RouterLinks.Users,
    icon: "user",
    name: "Users",
  },
  {
    key: "track",
    link: RouterLinks.Tracks,
    icon: "star",
    name: "Tracks",
  },
];


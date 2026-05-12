import { siteSettings } from './siteSettings';
import { announcement } from './announcement';
import { event } from './event';
import { leader } from './leader';
import { pastPresident } from './pastPresident';
import { project } from './project';
import { culturePage } from './culturePage';
import { libraryPage } from './libraryPage';
import { membershipPage } from './membershipPage';

export const schemaTypes = [
  siteSettings,
  membershipPage,
  libraryPage,
  culturePage,
  announcement,
  event,
  project,
  leader,
  pastPresident,
];

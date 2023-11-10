import { PATH } from './path';

enum TAB_CONSTANTS {
  PERFORMANCE = '공연',
  EVENT_SHOW = '행사',
  RECRUITMENT = '모집공고',

  APPLIED_EVENT = '참여 신청한 행사',
  BOOKMARKED_EVENT = '북마크한 행사',

  CLUB_HOME = '클럽 홈',
  CLUB_EVENTS = '클럽 행사',
  CLUB_MANAGE = '클럽 관리',
}

const MAIN_TABS = [
  { title: `${TAB_CONSTANTS.PERFORMANCE}`, link: `${PATH.MAIN}` },
  { title: `${TAB_CONSTANTS.EVENT_SHOW}`, link: `${PATH.MAIN_EVENT}` },
  { title: `${TAB_CONSTANTS.RECRUITMENT}`, link: `${PATH.MAIN_RECRUITMENT}` },
];

const PROFILE_TABS = [
  { title: `${TAB_CONSTANTS.APPLIED_EVENT}`, link: `${PATH.PROFILE}` },
  { title: `${TAB_CONSTANTS.BOOKMARKED_EVENT}`, link: `${PATH.BOOKMARK}` },
];

export { TAB_CONSTANTS, MAIN_TABS, PROFILE_TABS };

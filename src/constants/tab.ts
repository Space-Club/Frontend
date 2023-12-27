import { PATH } from './path';

enum TAB_CONSTANTS {
  PERFORMANCE = '공연',
  EVENT_SHOW = '홍보',
  RECRUITMENT = '모집공고',

  APPLIED_EVENT = '참여 신청한 행사',
  BOOKMARKED_EVENT = '북마크한 행사',

  CLUB_HOME = '클럽 홈',
  CLUB_BOARD = '클럽 게시판',
  CLUB_EVENTS = '클럽 행사',
  CLUB_MANAGE = '클럽 관리',
}

const MAIN_TABS = [
  { title: `${TAB_CONSTANTS.PERFORMANCE}`, link: `${PATH.MAIN}` },
  { title: `${TAB_CONSTANTS.EVENT_SHOW}`, link: `${PATH.MAIN_EVENT}` },
  { title: `${TAB_CONSTANTS.RECRUITMENT}`, link: `${PATH.MAIN_RECRUITMENT}` },
];

const PROFILE_TABS = [
  { title: `${TAB_CONSTANTS.APPLIED_EVENT}`, link: `${PATH.PROFILE_APPLIED}` },
  { title: `${TAB_CONSTANTS.BOOKMARKED_EVENT}`, link: `${PATH.PROFILE_BOOKMARK}` },
];

const CLUB_MEMBER_TABS = (clubId: string) => [
  { title: `${TAB_CONSTANTS.CLUB_HOME}`, link: `${PATH.CLUB.HOME(clubId)}` },
  { title: `${TAB_CONSTANTS.CLUB_BOARD}`, link: `${PATH.CLUB.BOARD(clubId)}` },
  { title: `${TAB_CONSTANTS.CLUB_EVENTS}`, link: `${PATH.CLUB.EVENT(clubId)}` },
];

const CLUB_MANAGER_TABS = (clubId: string) => [
  { title: `${TAB_CONSTANTS.CLUB_HOME}`, link: `${PATH.CLUB.HOME(clubId)}` },
  { title: `${TAB_CONSTANTS.CLUB_BOARD}`, link: `${PATH.CLUB.BOARD(clubId)}` },
  { title: `${TAB_CONSTANTS.CLUB_EVENTS}`, link: `${PATH.CLUB.EVENT(clubId)}` },
  { title: `${TAB_CONSTANTS.CLUB_MANAGE}`, link: `${PATH.CLUB.MANAGE(clubId)}` },
];

export { TAB_CONSTANTS, MAIN_TABS, PROFILE_TABS, CLUB_MEMBER_TABS, CLUB_MANAGER_TABS };

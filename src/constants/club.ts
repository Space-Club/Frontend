import { TAB_CONSTANTS } from './tab';

const CREATE_CLUB = {
  TITLE: '클럽을 생성해보세요',
  NAME: '클럽 이름',
  NAME_PLACEHOLDER: '클럽 이름을 작성하세요.',
  INFO: '클럽 소개',
  INFO_PLACEHOLDER: '클럽 소개를 작성하세요.',
  BUTTON: '클럽 생성하기',
  NAME_MIN_LENGTH: 2,
  INFO_MIN_LENGTH: 2,
  NAME_MAX_LENGTH: 12,
  INFO_MAX_LENGTH: 25,
};

const CREATE_EVENT = {
  BUTTON_TEXT: '행사 생성하기',
};

const CLUB_TABS = [
  { title: `${TAB_CONSTANTS.CLUB_HOME}` },
  { title: `${TAB_CONSTANTS.CLUB_EVENTS}` },
  { title: `${TAB_CONSTANTS.CLUB_MANAGE}` },
];

const INVITE_LINK = {
  VALID_TIME: 48,
};

export { CREATE_CLUB, INVITE_LINK, CREATE_EVENT, CLUB_TABS };

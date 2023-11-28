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

const INVITE_LINK = {
  VALID_TIME: 48,
  MESSAGE: {
    NEW_CREATE: '초대링크를 생성해보세요.',
    EXPIRED: '초대링크가 만료되었습니다. 새로운 초대링크를 생성해주세요.',
  },
};

const MIN_CLUB_NAME_LENGTH = 2;
const MAX_CLUB_NAME_LENGTH = 12;
const MIN_CLUB_INFO_LENGTH = 2;
const MAX_CLUB_INFO_LENGTH = 25;

export {
  CREATE_CLUB,
  INVITE_LINK,
  CREATE_EVENT,
  MIN_CLUB_NAME_LENGTH,
  MAX_CLUB_NAME_LENGTH,
  MIN_CLUB_INFO_LENGTH,
  MAX_CLUB_INFO_LENGTH,
};

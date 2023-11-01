const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/login/kakao',
  REGISTER: '/users',
  MY_CLUB: '/myclub', // TODO: API 명세서 나올시, 수정 필요
  PERFORMANCE_FORM: '/events',
  GET_MY_EVENT: '/profile/event/myEvent', //TODO: API 명세서 나올시, 수정 필요
  GET_EVENT_DETAIL: '/event/detail',
  EVENTS: '/events',
  INVITE_LINK: '/club/invite', // TODO: API 명세서 나올시, 수정 필요
};

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/login/kakao',
  REGISTER: '/users',
  MY_CLUB: '/myclub', // API 명세서 나올시, 수정 필요
  ALL_EVENTS: '/events',
  GET_MY_EVENT: '/profile/event/myEvent', //TODO: API 명세서 나올시, 수정 필요
  POST_EVENT_APPLY: '/events/apply',
};

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

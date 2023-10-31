const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/login/kakao',
  REGISTER: '/users',
  MY_CLUB: '/myclub', // API 명세서 나올시, 수정 필요
  GET_EVENT_DETAIL: '/event/detail',
  GET_MY_EVENT: '/user/events',
  ALL_EVENTS: '/events',
};

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

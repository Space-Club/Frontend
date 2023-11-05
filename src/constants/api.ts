const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/users/oauths',
  REGISTER: '/users',
  MY_CLUB: '/clubs/all',
  PERFORMANCE_FORM: '/events',
  GET_MY_EVENT: '/profile/event/myEvent', //TODO: API 명세서 나올시, 수정 필요
  GET_EVENT_DETAIL: '/event/detail',
  ALL_EVENTS: '/events',
  CREATE_CLUB: '/clubs',
  INVITE_LINK: '/club/invite', // TODO: API 명세서 나올시, 수정 필요
  POST_EVENT_APPLY: '/events/apply',
<<<<<<< HEAD
<<<<<<< HEAD
  GET_USER_INFO: '/users/profiles',
=======
=======
  CLUB_MEMBERS: (clubId: string) => `/clubs/${clubId}/members`,
>>>>>>> c23a866 (SKRF-188 feat : 클럽 멤버 관리 컴포넌트 추가 (#51))
  CLUB_EVENTS: ({ clubId }: { clubId: number }) => `/clubs/${clubId}/events`,
>>>>>>> cba4fee (SKRF-186 design, feat: 클럽 행사 페이지 ui 구현 및 api 연결 (#50))
  PATCH_MEMBER_ROLE: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  DELETE_MEMBER: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
} as const;

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

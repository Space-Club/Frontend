const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/users/oauths',
  REGISTER: '/users',
  USER_IMAGE: '/users/images',
  MY_CLUB: '/clubs/all',
  PERFORMANCE_FORM: '/events',
  GET_MY_EVENT: '/profile/event/myEvent', //TODO: API 명세서 나올시, 수정 필요
  GET_EVENT_DETAIL: '/event/detail',
  ALL_EVENTS: '/events',
  CREATE_CLUB: '/clubs',
  INVITE_LINK: '/club/invite', // TODO: API 명세서 나올시, 수정 필요
  POST_EVENT_APPLY: '/events/apply',
  CLUB_MEMBERS: (clubId: string) => `/clubs/${clubId}/members`,
  CLUB_EVENTS: ({ clubId }: { clubId: number }) => `/clubs/${clubId}/events`,
  PATCH_MEMBER_ROLE: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  DELETE_MEMBER: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  GET_CLUB: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,
  GET_USER_INFO: '/users/profiles',
} as const;

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

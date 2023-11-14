const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/users/oauths',
  REGISTER: '/users',
  USER_IMAGE: '/users/images',
  MY_CLUB: '/users/clubs',

  PERFORMANCE_FORM: '/events',
  GET_MY_EVENT: ({ page, size, sort }: { page: number; size: string; sort: string }) =>
    `users/events?page=${page}&size=${size}&sort=${sort}`,
  GET_EVENT_DETAIL: '/events',
  ALL_EVENTS: '/events',
  POST_EVENT_APPLY: '/events/apply',

  GET_SUBMITTED_FORMS: ({ eventId }: { eventId: string | number }) =>
    `events/${eventId}/forms/applications`,

  CREATE_CLUB: '/clubs',
  INVITE_LINK: (clubId: string) => `/clubs/${clubId}/invite`,
  CLUB_MEMBERS: (clubId: string) => `/clubs/${clubId}/members`,
  CLUB_EVENTS: ({ clubId }: { clubId: number }) => `/clubs/${clubId}/events`,
  PATCH_MEMBER_ROLE: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,

  DELETE_MEMBER: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  BOOK_MARK: '/bookmark',
  GET_CLUB: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,
  GET_USER_INFO: '/users/profiles',
} as const;

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

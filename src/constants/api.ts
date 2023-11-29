const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/users/oauths',
  REGISTER: '/users',
  DELETE_USER: '/users',
  MY_CLUB: '/users/clubs',
  LOGOUT: '/users/logout',

  PATCH_PROFILE_IMAGE: '/me/profile',
  PUT_USER_INFO: '/me/profile',
  DELETE_PROFILE_IMAGE: '/me/profile/images',

  PERFORMANCE_FORM: '/events',
  GET_APPLIED_EVENT: ({ page, size, sort }: { page: number; size: string; sort: string }) =>
    `users/events?page=${page}&size=${size}&sort=${sort}`,
  GET_EVENT_DETAIL: '/events',
  GET_EVENT_FORM: (eventId: string) => `/events/${eventId}/forms`,
  ALL_EVENTS: ({
    category,
    pageNumber,
    sort,
  }: {
    category: string;
    pageNumber: number;
    sort: string;
  }) => `events?category=${category}&page=${pageNumber}&size=12&sort=${sort},asc`,
  EVENT_APPLY: '/events/participate',
  CANCEL_EVENT: ({ eventId }: { eventId: string }) => `/events/${eventId}/participate`,
  GET_SUBMITTED_FORMS: ({ eventId, pageNumber }: { eventId: string; pageNumber: number }) =>
    `events/${eventId}/forms/submit?page=${pageNumber}&size=20&sort=id,desc`,
  SEARCHES: ({ keyword, page }: { keyword: string; page: number }) =>
    `/events/searches?keyword=${keyword}&page=${page}&size=12&sort=id,asc`,
  SUBMITTED_FORM_STATUS: ({ eventId }: { eventId: string }) => `/events/${eventId}/forms/submit`,

  CREATE_CLUB: '/clubs',
  MEMBER_AUTH: (clubId: string) => `/clubs/${clubId}/users`,
  DELETE_CLUB: (clubId: string) => `clubs/${clubId}`,
  INVITE_LINK: (clubId: string) => `/clubs/${clubId}/invite`,
  INVITE_CLUB_CODE: (inviteCode: string) => `/clubs/invites/${inviteCode}`,
  CLUB_MEMBERS: (clubId: string) => `/clubs/${clubId}/members`,
  CLUB_EVENTS: ({ clubId, pageNumber }: { clubId: string; pageNumber: number }) =>
    `/clubs/${clubId}/events?page=${pageNumber}&size=12&sort=id,asc`,
  CLUB_SCHEDULES: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/events?page=0&sort=id,desc`,

  PATCH_MEMBER_ROLE: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  EDIT_CLUB_SETTING: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,
  WITHDRAW_CLUB: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/users`,

  DELETE_MEMBER: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  GET_BOOKMARK: ({ page, size, sort }: { page: number; size: number; sort: string }) =>
    `/me/events/bookmark?page=${page}&size=${size}&sort=${sort}`,
  BOOK_MARK: (eventId: string) => `/me/events/${eventId}`,
  GET_CLUB: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,
  GET_USER_INFO: '/me/profile',

  POST_CLUB_NOTICE: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/notices`,
  GET_CLUB_NOTICE: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/notices`,
  PATCH_CLUB_NOTICE: ({ clubId, noticeId }: { clubId: string; noticeId: string }) =>
    `/clubs/${clubId}/notices/${noticeId}`,
  DELETE_CLUB_NOTICE: ({ clubId, noticeId }: { clubId: string; noticeId: string }) =>
    `/clubs/${clubId}/notices/${noticeId}`,

  POST_FORM_OPTION: `/events/forms`,
} as const;

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

const SPACECLUB_BASE_URL = 'https://spaceclub.site';

const NETWORK_TIMEOUT = 10000;

const END_POINTS = {
  KAKAO_LOGIN: '/users/oauths',
  REGISTER: '/users',
  USER_IMAGE: '/users/images',
  MY_CLUB: '/users/clubs',

  PERFORMANCE_FORM: '/events',
  GET_APPLIED_EVENT: ({ page, size, sort }: { page: number; size: string; sort: string }) =>
    `users/events?page=${page}&size=${size}&sort=${sort}`,
  GET_EVENT_DETAIL: '/events',
  ALL_EVENTS: '/events',
  POST_EVENT_APPLY: '/events/apply',
  CANCEL_EVENT: ({ eventId }: { eventId: string }) => `/events/${eventId}/cancel`,

  CREATE_CLUB: '/clubs',
  INVITE_LINK: (clubId: string) => `/clubs/${clubId}/invite`,
  INVITE_CLUB_CODE: (inviteCode: string) => `/clubs/invete/${inviteCode}`,
  CLUB_MEMBERS: (clubId: string) => `/clubs/${clubId}/members`,
  CLUB_EVENTS: ({ clubId }: { clubId: number | string }) => `/clubs/${clubId}/events`,
  PATCH_MEMBER_ROLE: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  EDIT_CLUB_SETTING: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,

  DELETE_MEMBER: ({ clubId, memberId }: { clubId: string; memberId: string }) =>
    `/clubs/${clubId}/members/${memberId}`,
  BOOK_MARK: '/bookmark',
  GET_CLUB: ({ clubId }: { clubId: string }) => `/clubs/${clubId}`,
  GET_USER_INFO: '/users/profiles',

  POST_CLUB_NOTICE: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/notices`,
  GET_CLUB_NOTICE: ({ clubId }: { clubId: string }) => `/clubs/${clubId}/notices`,
  PATCH_CLUB_NOTICE: ({ clubId, noticeId }: { clubId: string; noticeId: string }) =>
    `/clubs/${clubId}/notices/${noticeId}`,
  DELETE_CLUB_NOTICE: ({ clubId, noticeId }: { clubId: string; noticeId: string }) =>
    `/clubs/${clubId}/notices/${noticeId}`,

  POST_FORM_OPTION: `/events/forms`,
} as const;

export { SPACECLUB_BASE_URL, NETWORK_TIMEOUT, END_POINTS };

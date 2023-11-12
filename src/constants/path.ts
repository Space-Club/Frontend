const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao',

  MAIN: '/',
  MAIN_EVENT: '/events',
  MAIN_RECRUITMENT: '/recruitment',
  PROFILE_APPLIED: '/profile/applied',
  PROFILE_BOOKMARK: '/profile/bookmark',

  CLUB: {
    HOME: (clubId: string | number) => `/club/${clubId}/home`,
    EVENT: (clubId: string | number) => `/club/${clubId}/event`,
    MANAGE: (clubId: string | number) => `/club/${clubId}/manage`,
  },
  CREATE: '/create',

  EVENT: {
    DETAIL: (eventId: string) => `/event/detail/${eventId}`,
    CHECK_FORM: '/event/checkform',
    SUBMIT_FORM: '/event/submitform',
    CHOICE: '/event/choice',
    WRITE_INFO: '/event/writeinfo',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

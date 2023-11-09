const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao',

  MAIN: '/',
  MAIN_EVENT: '/events',
  MAIN_RECRUITMENT: '/recruitment',
  PROFILE: '/profile',
  BOOKMARK: '/profile/bookmark',

  CLUB: {
    HOME: (clubId: string) => `/club/${clubId}`,
    EVENT: (clubId: string) => `/club/${clubId}/event`,
    MANAGE: (clubId: string) => `/club/${clubId}/manage`,
  },
  CREATE: '/create',

  EVENT: {
    DETAIL: '/event/detail',
    CHECK_FORM: '/event/checkform',
    SUBMIT_FORM: '/event/submitform',
    CHOICE: '/event/choice',
    WRITE_INFO: '/event/writeinfo',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

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
    HOME: (clubId: string | number) => `/club/${clubId}/home`,
    EVENT: (clubId: string | number) => `/club/${clubId}/event`,
    MANAGE: (clubId: string | number) => `/club/${clubId}/manage`,
    CHOICE: (clubId: string) => `/club/${clubId}/choice`,
  },
  CREATE: '/create',

  EVENT: {
    DETAIL: '/event/detail',
    CHECK_FORM: '/event/checkform',
    SUBMIT_FORM: '/event/submitform',
    WRITE_INFO: '/event/writeinfo',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

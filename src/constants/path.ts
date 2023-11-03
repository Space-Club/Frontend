const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao',
  MAIN: '/',
  PROFILE: '/profile/',
  CLUB: {
    HOME: '/club/home/', // /club/:clubId
    EVENT: '/club/event/', // /club/:clubId/event
    MANAGE: '/club/manage/', // /club/:clubId/manage
  },
  CREATE: '/create',
  EVENT: {
    DETAIL: '/event/detail/',
    CHECK_FORM: '/event/checkform/',
    SUBMIT_FORM: '/event/submitform',
    CHOICE: '/event/choice',
    WRITE_INFO: '/event/writeinfo',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

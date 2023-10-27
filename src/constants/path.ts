const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao',
  MAIN: '/',
  PROFILE: '/profile/:profileId',
  CLUB: {
    HOME: '/club/home/:clubId',
    EVENT: '/club/event/:eventId',
    MANAGE: '/club/manage/:clubId',
    CREATE: '/club/create',
  },
  EVENT: {
    DETAIL: '/event/detail/:eventId',
    CHECK_FORM: '/event/checkform/:eventId',
    SUBMIT_FORM: '/event/submitform',
    CHOICE: '/event/choice',
    WRITE_INFO: '/event/writeinfo',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

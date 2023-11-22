import { eventTypeAPI } from '@/types/event';

const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao',

  MAIN: '/',
  MAIN_EVENT: '/events',
  MAIN_RECRUITMENT: '/recruitment',
  PROFILE_APPLIED: '/profile/applied',
  PROFILE_BOOKMARK: '/profile/bookmark',
  SEARCH: '/search',

  CLUB: {
    HOME: (clubId: string | number) => `/club/${clubId}/home`,
    EVENT: (clubId: string | number) => `/club/${clubId}/event`,
    MANAGE: (clubId: string | number) => `/club/${clubId}/manage`,
    CHOICE: (clubId: string) => `/club/${clubId}/choice`,
    WRITE_INFO: (clubId: string) => `/club/${clubId}/writeinfo`,
    WRITE_FORM: (clubId: string | number, eventId: string | number, eventType: eventTypeAPI) =>
      `/club/${clubId}/writeform/${eventId}?event=${eventType}`,
  },
  CREATE: '/create',

  EVENT: {
    DETAIL: (eventId: string) => `/event/${eventId}`,
    EDIT_WRITE_INFO: (clubId: string, eventCategory: eventTypeAPI) =>
      `/club/${clubId}/writeinfo?event=${eventCategory?.toLowerCase()}`,
    CHECK_FORM: '/event/checkform',
    SUBMIT_FORM: '/event/submitform',
    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

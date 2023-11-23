import { eventTypeAPI } from '@/types/event';

const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauth/kakao/callback',

  MAIN: '/',
  MAIN_EVENT: '/events',
  MAIN_RECRUITMENT: '/recruitment',
  PROFILE: '/profile:category',
  PROFILE_APPLIED: '/profile/applied',
  PROFILE_BOOKMARK: '/profile/bookmark',
  SEARCH: (keyword: string) => `/search/${keyword}`,

  CLUB: {
    HOME: (clubId: string | number) => `/club/${clubId}/home`,
    EVENT: (clubId: string | number) => `/club/${clubId}/event`,
    MANAGE: (clubId: string | number) => `/club/${clubId}/manage`,
    CHOICE: (clubId: string) => `/club/${clubId}/choice`,
    WRITE_INFO: (clubId: string) => `/club/${clubId}/writeinfo`,
    WRITE_FORM: `/club/:clubId/writeform/:eventId`,
    WRITE_FORM_QUERY: (
      clubId: string | number,
      eventId: string | number,
      eventType: eventTypeAPI,
    ) => `/club/${clubId}/writeform/${eventId}?event=${eventType}`,
    INVITE: (inviteCode: string) => `clubs/invite/${inviteCode}`,
  },
  CREATE: '/create',

  EVENT: {
    DETAIL: (eventId: string) => `/event/${eventId}`,
    SUBMITTED_FORMS: (eventId: string) => `/event/${eventId}/forms`,
    SUBMIT_FORM: (eventId: string) => `/event/${eventId}/submitform`,

    WRITE_FORM: '/event/writeform',
  },
} as const;

export { PATH };

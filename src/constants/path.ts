import { ProfileEventType, eventTypeAPI } from '@/types/event';

const PATH = {
  LOGIN: '/login',
  REGISTER: '/register',
  OAUTH_REDIRECT: '/oauths/kakao/callback',

  MAIN: '/',
  MAIN_EVENT: '/events',
  MAIN_RECRUITMENT: '/recruitment',
  PROFILE: (category: ProfileEventType | ':category') => `/profile/${category}`,
  PROFILE_APPLIED: '/profile/applied',
  PROFILE_BOOKMARK: '/profile/bookmark',
  SEARCH: (keyword: string) => `/search/${keyword}`,

  CLUB: {
    HOME: (clubId: string) => `/club/${clubId}/home`,
    EVENT: (clubId: string) => `/club/${clubId}/event`,
    MANAGE: (clubId: string) => `/club/${clubId}/manage`,
    CHOICE: (clubId: string) => `/club/${clubId}/choice`,
    WRITE_INFO: (clubId: string) => `/club/${clubId}/writeinfo`,
    WRITE_FORM: (clubId: string, eventId: string) => `/club/${clubId}/writeform/${eventId}`,
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
    SUBMITTED_FORMS: (clubId: string, eventId: string) => `/club/${clubId}/event/${eventId}/forms`,
    SUBMIT_FORM: (eventId: string) => `/event/${eventId}/submitform`,

    EDIT_WRITE_INFO: (clubId: string, eventCategory: eventTypeAPI) =>
      `/club/${clubId}/writeinfo?event=${eventCategory?.toLowerCase()}`,
  },
} as const;

export { PATH };

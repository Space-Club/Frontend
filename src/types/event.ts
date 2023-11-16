import Theme from '@/styles/Theme';

import { PageData } from './common';

type EventStatus = 'CONFIRMED' | 'PENDING' | 'CANCEL_REQUESTED' | 'CANCELED';

type EventTagKey = 'publicEvent' | 'clubOnlyEvent' | EventStatus;

type EventType = 'performance' | 'promotion' | 'recruitment' | 'clubSchedule';

type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER';

type ProfileEventType = 'applied' | 'bookmark';

type eventTypeAPI = 'SHOW' | 'PROMOTION' | 'RECRUITMENT' | 'CLUB';

interface EventTag {
  title: string;
  borderColor: keyof typeof Theme.color;
  backgroundColor: keyof typeof Theme.color;
  textColor: keyof typeof Theme.color;
}

type EventTags = {
  [key in EventTagKey]: EventTag;
};

interface Event {
  id: string;
  title: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  location: string;
  clubName: string;
  clubLogoImageUrl: string;
}

interface BookmarkedEvent
  extends Pick<Event, 'id' | 'title' | 'location' | 'clubName' | 'posterImageUrl' | 'startDate'> {
  bookmark: boolean;
}

interface GetAllEventsRequest {
  pageNumber: number;
}

interface GetAllEventsResponse {
  data: {
    id: string;
    title: string;
    poster: string;
    startDate: string;
    startTime: string;
    location: string;
    clubName: string;
    clubImage: string;
  }[];
  pageData: PageData;
}

interface FormOption {
  id: string;
  title: string;
  type: FormType;
  visible: boolean;
}

interface getEventDetailResponse {
  title: string;
  posterImageUrl: string;
  startDate: string;
  startTime: string;
  location: string;
  clubName: string;
  openDate: string;
  openTime: string;
  closeDate: string;
  closeTime: string;
  content: string;
  isManager: boolean;
}

interface getEventFormResponse {
  event: {
    title: string;
  };
  form: {
    description: string;
    options: {
      id: number;
      title: string;
      type: FormType;
      option?: string[];
    }[];
  };
}

interface postPerformanceFormResponse {
  eventId: string;
}

interface FormPage {
  eventType: eventTypeAPI;
  clubId: string;
}

export {
  getEventFormResponse,
  GetAllEventsRequest,
  GetAllEventsResponse,
  getEventDetailResponse,
  FormType,
  FormOption,
  Event,
  EventTags,
  EventTagKey,
  EventType,
  EventTag,
  eventTypeAPI,
  postPerformanceFormResponse,
  ProfileEventType,
  EventStatus,
  FormPage,
  BookmarkedEvent,
};

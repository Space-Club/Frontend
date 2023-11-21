import Theme from '@/styles/Theme';

import { PageData } from './common';
import { FormType } from './form';

type EventStatus = 'CONFIRMED' | 'PENDING' | 'CANCEL_REQUESTED' | 'CANCELED';

type EventTagKey = 'publicEvent' | 'clubOnlyEvent' | EventStatus;

type EventType = 'performance' | 'promotion' | 'recruitment' | 'clubSchedule';

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

interface Schedule {
  eventId: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  manager: string;
}

interface SchedulesProps {
  schedules: Schedule[];
}

interface GetAllEventsRequest {
  pageNumber: number;
  category: string;
  sort: string;
}

interface GetAllEventsResponse {
  data: {
    id: string;
    title: string;
    posterImageUrl: string;
    startDate: string;
    startTime: string;
    formCloseDate: string;
    formCloseTime: string;
    location: string;
    clubName: string;
    clubLogoImageUrl: string;
  }[];
  pageData: PageData;
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
  isEdit?: boolean;
}

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export {
  getEventFormResponse,
  GetAllEventsRequest,
  GetAllEventsResponse,
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
  Schedule,
  SchedulesProps,
  ValuePiece,
  Value,
  BookmarkedEvent,
};

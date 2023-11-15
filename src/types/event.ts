import Theme from '@/styles/Theme';

type EventStatus = 'CONFIRMED' | 'PENDING' | 'CANCEL_REQUESTED' | 'CANCELED';

type EventTagKey = 'publicEvent' | 'clubOnlyEvent' | EventStatus;

type EventType = 'performance' | 'promotion' | 'recruitment' | 'clubSchedule';

type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER';

type ProfileEventType = 'applied' | 'bookmark';

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

interface Schedule {
  eventId: string;
  title: string;
  startDateTime: string;
  endDateTime: string;
  manager: string;
  profileImageUrl: string;
}

interface SchedulesProps {
  schedules?: Schedule[];
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
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPage: number;
    totalElement: number;
  };
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

type eventTypeAPI = 'SHOW' | 'PROMOTION' | 'RECRUITMENT' | 'CLUB';

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
  Schedule,
  SchedulesProps,
};

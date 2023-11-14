import Theme from '@/styles/Theme';

type EventTagKey =
  | 'confirmed'
  | 'pending'
  | 'cancelled'
  | 'cancelRequested'
  | 'publicEvent'
  | 'clubOnlyEvent';

type EventType = 'performance' | 'promotion' | 'recruitment' | 'clubSchedule';

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

interface GetAppliedEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  status: EventTagKey;
  posterImageUrl: string;
}

interface GetAppliedEventResponse {
  data: GetAppliedEventData[];
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

interface GetAppliedEventRequest {
  pageNumber: number;
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

type FormType = 'RADIO' | 'TEXT' | 'SELECT' | 'NUMBER';

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

interface Question {
  optionId: number;
  content: string;
}

interface postEventApplyRequest {
  eventId: string;
  forms: Question[];
}

export {
  getEventFormResponse,
  GetAllEventsRequest,
  GetAllEventsResponse,
  GetAppliedEventRequest,
  GetAppliedEventResponse,
  getEventDetailResponse,
  FormType,
  FormOption,
  Event,
  EventTags,
  EventTagKey,
  EventType,
  EventTag,
  Question,
  postEventApplyRequest,
};

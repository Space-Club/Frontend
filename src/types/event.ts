import Theme from '@/styles/Theme';

type EventTagKey =
  | 'confirmed'
  | 'pending'
  | 'cancelled'
  | 'cancelRequested'
  | 'publicEvent'
  | 'clubOnlyEvent';

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

export { EventTagKey, EventTags, EventTag, Event };

interface GetMyEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  status: EventTagKey;
  posterImageUrl: string;
}

interface GetMyEventResponse {
  data: GetMyEventData[];
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPages: number;
    totalElements: number;
  };
}

interface GetMyEventRequest {
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

interface getEventDetailResponse {
  title: string;
  content: string;
  startDate: string;
  startTime: string;
  location: string;
  openDate: string;
  openTime: string;
  closeDate: string;
  closeTime: string;
  name: string;
  poster: string;
}

export {
  GetAllEventsRequest,
  GetAllEventsResponse,
  GetMyEventRequest,
  GetMyEventResponse,
  getEventDetailResponse,
};

import Theme from '@/styles/Theme';

type EventTagKey =
  | 'CONFIRMED'
  | 'PENDING'
  | 'CANCEL_REQUESTED'
  | 'CANCELLED'
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

type ProfileEventType = 'applied' | 'bookmark';

export {
  GetAllEventsRequest,
  GetAllEventsResponse,
  GetAppliedEventRequest,
  GetAppliedEventResponse,
  getEventDetailResponse,
  ProfileEventType,
};

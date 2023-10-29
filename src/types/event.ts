import Theme from '@/styles/Theme';

type EventTagKey = 'confirmed' | 'pending' | 'cancelled' | 'cancelRequested';

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
  poster: string;
  startDate: string;
  startTime: string;
  location: string;
  clubName: string;
  clubImage: string;
}

export { EventTagKey, EventTags, EventTag, Event };

interface GetMyEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  status: EventTagKey;
  poster: string;
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

export { GetMyEventResponse, GetMyEventRequest };

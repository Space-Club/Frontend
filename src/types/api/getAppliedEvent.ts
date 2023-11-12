import { EventStatus } from '../event';

interface GetAppliedEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  status: EventStatus;
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

export { GetAppliedEventRequest, GetAppliedEventResponse };

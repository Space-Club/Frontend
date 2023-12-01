import { PageData } from '../common';
import { EventStatus } from '../event';

interface GetAppliedEventData {
  id: string;
  title: string;
  clubName: string;
  startDate: string;
  location: string;
  participationStatus: EventStatus;
  posterImageUrl: string;
  ticketCount: string;
}

interface GetAppliedEventResponse {
  data: GetAppliedEventData[];
  pageData: PageData;
}

interface GetAppliedEventRequest {
  pageNumber: number;
}

export { GetAppliedEventRequest, GetAppliedEventResponse };

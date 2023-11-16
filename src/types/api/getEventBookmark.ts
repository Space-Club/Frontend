import { Event } from '../event';

interface GetAppliedEventRequest {
  page: number;
  size: number;
  sort: 'id' | 'asc';
}

interface GetAppliedEventResponse
  extends Pick<Event, 'title' | 'location' | 'clubName' | 'posterImageUrl' | 'startDate'> {
  bookmark: boolean;
}

export { GetAppliedEventRequest, GetAppliedEventResponse };

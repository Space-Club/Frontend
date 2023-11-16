import { Event } from '../event';

interface GetEventBookmarkRequest {
  page: number;
  size: number;
  sort: 'id' | 'asc';
}

interface GetEventBookmarkResponse
  extends Pick<Event, 'title' | 'location' | 'clubName' | 'posterImageUrl' | 'startDate'> {
  bookmark: boolean;
}

export { GetEventBookmarkRequest, GetEventBookmarkResponse };

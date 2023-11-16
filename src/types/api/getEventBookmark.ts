import { PageData } from '../common';
import { Event } from '../event';

interface GetEventBookmarkRequest {
  page: number;
  size: number;
  sort: 'id' | 'asc';
}

interface GetEventBookmarkResponse {
  data: {
    id: string;
    bookmark: boolean;
  } & Pick<Event, 'title' | 'location' | 'clubName' | 'posterImageUrl' | 'startDate'>;
  pageData: PageData;
}

export { GetEventBookmarkRequest, GetEventBookmarkResponse };

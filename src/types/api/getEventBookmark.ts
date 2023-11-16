import { PageData } from '../common';
import { BookmarkedEvent } from '../event';

interface GetEventBookmarkRequest {
  page: number;
  size: number;
  sort: 'id' | 'asc';
}

interface GetEventBookmarkResponse {
  data: BookmarkedEvent[];
  pageData: PageData;
}

export { GetEventBookmarkRequest, GetEventBookmarkResponse };

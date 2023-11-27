import { ClubInfo } from '../club';
import { PageData } from '../common';
import { EventInfo } from '../event';

interface SearchResultRequest {
  keyword: string;
  page: number;
}

interface SearchResultResponse {
  data: {
    id: string;
    eventInfo: EventInfo;
    clubInfo: ClubInfo;
  }[];
  pageData: PageData;
}

export { SearchResultRequest, SearchResultResponse };

import { ClubInfo } from '../club';
import { PageData } from '../common';
import { EventInfo } from '../event';
import { FormInfo } from '../form';

interface SearchResultRequest {
  keyword: string;
  page: number;
}

interface SearchResultResponse {
  data: {
    id: string;
    eventInfo: EventInfo;
    formInfo: FormInfo;
    clubInfo: ClubInfo;
  }[];
  pageData: PageData;
}

export { SearchResultRequest, SearchResultResponse };

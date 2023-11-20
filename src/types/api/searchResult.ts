import { PageData } from '../common';

interface SearchResultRequest {
  keyword: string;
  page: number;
}

interface SearchResultResponse {
  data: {
    id: string;
    eventInfo: {
      title: string;
      posterImageUrl: string;
      location: string;
      startDate: string;
      startTime: string;
    };
    formInfo: {
      startDate: string;
      startTime: string;
      endDate: string;
      endTime: string;
    };
    clubInfo: {
      name: string;
      logoImageUrl: string;
    };
  }[];
  pageData: PageData;
}

export { SearchResultRequest, SearchResultResponse };

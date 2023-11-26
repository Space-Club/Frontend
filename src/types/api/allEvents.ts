import { ClubInfo } from '../club';
import { PageData } from '../common';
import { EventInfo } from '../event';

interface AllEventsRequest {
  pageNumber: number;
  category: string;
  sort: string;
}

interface AllEventsResponse {
  data: {
    id: string;
    eventInfo: EventInfo;
    clubInfo: ClubInfo;
  }[];
  pageData: PageData;
}

export { AllEventsRequest, AllEventsResponse };

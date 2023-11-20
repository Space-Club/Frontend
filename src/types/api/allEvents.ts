import { ClubInfo } from '../club';
import { PageData } from '../common';
import { EventInfo } from '../event';
import { FormInfo } from '../form';

interface AllEventsRequest {
  pageNumber: number;
  category: string;
  sort: string;
}

interface AllEventsResponse {
  data: {
    id: string;
    eventInfo: EventInfo;
    formInfo: FormInfo;
    clubInfo: ClubInfo;
  }[];
  pageData: PageData;
}

export { AllEventsRequest, AllEventsResponse };

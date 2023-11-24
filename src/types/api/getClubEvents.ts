import { FormInfo } from '@/types/form';

import { ClubInfo } from '../club';
import { PageData } from '../common';
import { ClubEventInfo } from '../event';

interface GetClubEventsRequest {
  clubId: string;
  pageNumber: number;
}

interface GetClubEventsResponse {
  data: {
    id: string;
    eventInfo: ClubEventInfo;
    formInfo: FormInfo;
    clubInfo: ClubInfo;
  }[];
  pageData: PageData;
}

export { GetClubEventsRequest, GetClubEventsResponse };

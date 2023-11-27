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
    clubInfo: ClubInfo;
    managerInfo: {
      name: string;
      profileImageUrl: string;
    };
  }[];
  pageData: PageData;
}

export { GetClubEventsRequest, GetClubEventsResponse };

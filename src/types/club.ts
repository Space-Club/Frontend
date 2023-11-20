import { Event } from './event';

interface Club {
  name: string;
  logoImageUrl: string;
  info: string;
  memberCount: string;
  coverImageUrl: string;
  inviteUrl: string;
  reverse?: boolean;
}

interface ClubInfo extends Pick<Club, 'name' | 'logoImageUrl'> {}

interface CreateClubFormValue {
  image: File | null;
  name?: string;
  info?: string;
}

interface GetClubEventsRequest {
  clubId: number | string;
  pageNumber: number;
}

type ClubEventType = Event & { openStatus: 'CLUB' | 'All' };

interface GetClubEventsResponse {
  data: ClubEventType[];
  pageData: {
    first: boolean;
    last: boolean;
    pageNumber: number;
    size: number;
    totalPages: number;
    totalElement: number;
  };
}

interface getInviteLinkResponse {
  link: 'string'; // TODO 명세서 나올시 수정 필요;
}

interface Notice {
  id: string;
  notice: string;
}

export {
  getInviteLinkResponse,
  GetClubEventsRequest,
  GetClubEventsResponse,
  CreateClubFormValue,
  Club,
  Notice,
  ClubInfo,
};

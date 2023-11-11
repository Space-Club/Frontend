import { Event } from './event';

interface Club {
  name: string;
  logoImageUrl: string;
  info: string;
  memberCount: string;
  coverImageUrl: string;
  inviteUrl: string;
}

interface CreateClubFormValue extends Pick<Club, 'name' | 'info'> {
  owner: string;
  image: FileList | null;
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

export {
  getInviteLinkResponse,
  GetClubEventsRequest,
  GetClubEventsResponse,
  CreateClubFormValue,
  Club,
};

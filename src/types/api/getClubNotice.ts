import { Notice } from '../club';

interface GetClubNoticeRequest {
  clubId: string;
}

interface GetClubNoticeResponse {
  notices: Notice[];
}

export { GetClubNoticeRequest, GetClubNoticeResponse };

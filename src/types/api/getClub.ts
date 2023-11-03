import { Club } from '../club';

interface GetClubRequest {
  clubId: string;
}

interface GetClubResponse extends Club {}

export { GetClubRequest, GetClubResponse };

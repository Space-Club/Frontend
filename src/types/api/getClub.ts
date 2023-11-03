import { Club } from '../club';

interface GetClubRequest {
  clubId: string;
}

interface GetClubResponse
  extends Pick<Club, 'background' | 'image' | 'info' | 'inviteCode' | 'memberCount' | 'name'> {}

export { GetClubRequest, GetClubResponse };

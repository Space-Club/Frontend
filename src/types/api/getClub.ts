import { Club } from '../club';

interface GetClubRequest {
  clubId: string;
}

interface GetClubResponse
  extends Pick<
    Club,
    'coverImageUrl' | 'logoImageUrl' | 'info' | 'inviteUrl' | 'memberCount' | 'name'
  > {}

export { GetClubRequest, GetClubResponse };

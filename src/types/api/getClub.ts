import { Club } from '../club';

interface GetClubRequest {
  clubId: string;
}
interface GetClubResponse
  extends Pick<
    Club,
    'coverImageUrl' | 'logoImageUrl' | 'info' | 'inviteUrl' | 'memberCount' | 'name'
  > {}

interface JoinClubRequest {
  inviteCode: string;
}

interface InviteClubResponse extends Pick<Club, 'name' | 'info' | 'logoImageUrl' | 'memberCount'> {
  clubId: string;
}

export { GetClubRequest, GetClubResponse, JoinClubRequest, InviteClubResponse };

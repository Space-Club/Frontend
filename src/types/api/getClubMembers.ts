import { ClubMember } from '../user';

interface GetClubMembersRequest {
  clubId: string;
}

type GetClubMembersResponse = ClubMember[];

export type { GetClubMembersRequest, GetClubMembersResponse };

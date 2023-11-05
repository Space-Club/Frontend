import { END_POINTS } from '@/constants/api';
import { GetClubMembersRequest, GetClubMembersResponse } from '@/types/api/getClubMembers';

import { axiosClientWithAuth } from '../axiosClient';

const getClubMembers = async ({ clubId }: GetClubMembersRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubMembersResponse>(
    `${END_POINTS.CLUB_MEMBERS(clubId)}`,
  );
  return data;
};

export default getClubMembers;

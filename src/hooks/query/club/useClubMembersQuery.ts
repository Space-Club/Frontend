import getClubMembers from '@/apis/users/getClubMembers';
import { GetClubMembersRequest } from '@/types/api/getClubMembers';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  GET_CLUB_MEMBERS: 'GET_CLUB_MEMBERS',
};

const useClubMembersQuery = ({ clubId }: GetClubMembersRequest) => {
  const { data: clubMembers } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getClubMembers({ clubId }),
  });

  return clubMembers ? { clubMembers } : { clubMembers: [] };
};

export default useClubMembersQuery;

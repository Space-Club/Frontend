import getClubMembers from '@/apis/users/getClubMembers';
import { GetClubMembersRequest } from '@/types/api/getClubMembers';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_MEMBERS: 'CLUB_MEMBERS' };

const useClubMembersQuery = ({ clubId }: GetClubMembersRequest) => {
  const { data: clubMembers } = useQuery({
    queryKey: [QUERY_KEY.CLUB_MEMBERS],
    queryFn: () => getClubMembers({ clubId }),
  });

  return clubMembers ? { clubMembers } : { clubMembers: [] };
};

export default useClubMembersQuery;

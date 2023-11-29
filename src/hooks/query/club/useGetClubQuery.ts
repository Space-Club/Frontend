import getClub from '@/apis/club/getClub';
import { GetClubRequest } from '@/types/api/getClub';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  GET_CLUB: 'GET_CLUB',
};

const useGetClubQuery = ({ clubId, isEnabled = true }: GetClubRequest) => {
  if (!clubId) null;
  const { data: clubInfo, refetch } = useQuery({
    queryFn: () => getClub({ clubId }),
    queryKey: [QUERY_KEY.GET_CLUB, clubId],
    enabled: isEnabled,
    suspense: true,
  });
  return { clubInfo, refetch };
};

export default useGetClubQuery;

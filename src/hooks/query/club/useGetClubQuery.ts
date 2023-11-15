import getClub from '@/apis/club/getClub';
import { GetClubRequest } from '@/types/api/getClub';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  GET_CLUB: 'GET_CLUB',
};

const useGetClubQuery = ({ clubId }: GetClubRequest) => {
  const { data: clubInfo, refetch } = useQuery({
    queryFn: () => getClub({ clubId }),
    queryKey: [QUERY_KEY],
  });
  return { clubInfo, refetch };
};

export default useGetClubQuery;

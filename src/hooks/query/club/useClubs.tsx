import getMyClubs from '@/apis/users/getMyClub';
import { getStorage } from '@/utils/localStorage';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  MY_CLUB: 'MY_CLUB',
};

const useClubs = () => {
  const token = getStorage('token');
  const { data, isLoading } = useQuery({
    queryFn: () => getMyClubs(),
    queryKey: [QUERY_KEY.MY_CLUB],
    staleTime: 1000 * 60,
    enabled: !!token,
  });

  return { clubs: data, isLoading };
};

export default useClubs;

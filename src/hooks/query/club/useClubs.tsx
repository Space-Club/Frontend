import getMyClubs from '@/apis/users/getMyClub';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  MY_CLUB: 'MY_CLUB',
};

const useClubs = () => {
  const { data: myClubs, isLoading } = useQuery({
    queryKey: [QUERY_KEY.MY_CLUB],
    queryFn: () => getMyClubs(),
    staleTime: 1000 * 60,
  });

  return { myClubs, isLoading };
};

export default useClubs;

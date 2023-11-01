import getMyClubs from '@/apis/users/getMyClub';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = {
  MY_CLUB: 'MY_CLUB',
};

const useClubs = () => {
  const { data: myClubs, isLoading } = useQuery({
    queryKey: [QUERY_KEY.MY_CLUB],
    queryFn: () => getMyClubs(),
    staleTime: 1000 * 60,
  });

  const { data } = myClubs ?? {};

  return { clubs: data, isLoading };
};

export default useClubs;

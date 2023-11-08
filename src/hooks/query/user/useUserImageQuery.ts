import getUser from '@/apis/users/getUser';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = { USER_IMAGE: 'USER_IMAGE' };

const USER_IMAGE_STALE_TIME = 1000 * 60;

const useUserImageQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.USER_IMAGE],
    queryFn: () => getUser(),
    staleTime: USER_IMAGE_STALE_TIME,
  });

  return { userImage: data, isLoading };
};

export default useUserImageQuery;

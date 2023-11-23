import getUser from '@/apis/users/getUser';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { USER_IMAGE: 'USER_IMAGE' };

const useGetUserInfoQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.USER_IMAGE],
    queryFn: () => getUser(),
  });

  return { userInfo: data, isLoading };
};

export default useGetUserInfoQuery;

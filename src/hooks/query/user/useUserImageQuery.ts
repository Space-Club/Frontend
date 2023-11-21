import getUser from '@/apis/users/getUser';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { USER_IMAGE: 'USER_IMAGE' };

const useUserImageQuery = () => {
  const { data, isLoading } = useQuery({
    queryKey: [QUERY_KEY.USER_IMAGE],
    queryFn: () => getUser(),
  });

  return { userImage: data, isLoading };
};

export default useUserImageQuery;

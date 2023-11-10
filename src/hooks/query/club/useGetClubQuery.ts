import getClub from '@/apis/club/getClub';
import { GetClubRequest } from '@/types/api/getClub';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = 'GET_CLUB'; //TODO: 객체로 할지 그냥 스트링값으로 할지 통일하기

const useGetClubQuery = ({ clubId }: GetClubRequest) => {
  const { data: clubInfo, refetch } = useQuery({
    queryFn: () => getClub({ clubId }),
    queryKey: [QUERY_KEY],
  });
  return { clubInfo, refetch };
};

export default useGetClubQuery;

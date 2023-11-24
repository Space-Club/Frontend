import getClubSchedules from '@/apis/club/getClubSchedules';
import { GetClubSchedulesRequest } from '@/types/api/getClubSchedules';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_SCHEDULES: 'CLUB_SCHEDULES' };

const useClubSchedulesQuery = ({ clubId }: GetClubSchedulesRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.CLUB_SCHEDULES, clubId],
    queryFn: () => getClubSchedules({ clubId }),
    suspense: true,
  });

  return { data };
};

export default useClubSchedulesQuery;

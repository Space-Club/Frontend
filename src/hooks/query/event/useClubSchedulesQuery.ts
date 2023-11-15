import getClubSchedules from '@/apis/club/getClubSchedules';
import { GetClubSchedulesRequest } from '@/types/api/getClubSchedules';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_SCHEDULES: 'CLUB_SCHEDULES' };
const SCHEDULES_STALE_TIME = 1000 * 60;

const useClubSchedulesQuery = ({ clubId }: GetClubSchedulesRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY.CLUB_SCHEDULES],
    queryFn: () => getClubSchedules({ clubId }),
    staleTime: SCHEDULES_STALE_TIME,
  });

  return { schedules: data };
};

export default useClubSchedulesQuery;

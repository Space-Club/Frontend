import getClubEvents from '@/apis/club/getClubEvents';
import { GetClubEventsRequest } from '@/types/club';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = { CLUB_EVENTS: 'CLUB_EVENTS' };

const CLUB_EVENTS_STALE_TIME = 1000 * 60;

const useClubEventsQuery = ({ clubId, pageNumber }: GetClubEventsRequest) => {
  const { data: clubEvents, isLoading } = useQuery({
    queryKey: [QUERY_KEY.CLUB_EVENTS],
    queryFn: () => getClubEvents({ clubId, pageNumber }),
    staleTime: CLUB_EVENTS_STALE_TIME,
  });

  const { data, pageData } = clubEvents ?? {};

  return { clubEvents: data, pageData, isLoading };
};

export default useClubEventsQuery;

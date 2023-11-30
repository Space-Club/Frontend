import getClubEvents from '@/apis/club/getClubEvents';
import { GetClubEventsRequest } from '@/types/api/getClubEvents';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_EVENTS: 'CLUB_EVENTS' };

const CLUB_EVENTS_STALE_TIME = 1000 * 60;

const useClubEventsQuery = ({ clubId, pageNumber, isSchedule }: GetClubEventsRequest) => {
  const { data: events } = useQuery({
    queryKey: [QUERY_KEY.CLUB_EVENTS, clubId, pageNumber],
    queryFn: () => getClubEvents({ clubId, pageNumber, isSchedule }),
    staleTime: CLUB_EVENTS_STALE_TIME,
    suspense: true,
  });

  const { data, pageData } = events ?? {};

  return { clubEvents: data, pageData };
};

export default useClubEventsQuery;

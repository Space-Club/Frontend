import getAllEvents from '@/apis/event/getAllEvents';
import { GetAllEventsRequest } from '@/types/event';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = { ALL_EVENTS: 'ALL_EVENTS' };

const useAllEventsQuery = ({ pageNumber, category, sort }: GetAllEventsRequest) => {
  const { data: allEvents } = useQuery({
    queryKey: [QUERY_KEY.ALL_EVENTS],
    queryFn: () => getAllEvents({ pageNumber, category, sort }),
  });

  const { data, pageData } = allEvents ?? {};

  return { events: data, pageData };
};

export default useAllEventsQuery;

import getAllEvents from '@/apis/event/getAllEvents';
import { AllEventsRequest } from '@/types/api/allEvents';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { SHOW: 'SHOW', PROMOTION: 'PROMOTION', RECRUITMENT: 'RECRUITMENT' };

const useAllEventsQuery = ({ pageNumber, category }: AllEventsRequest, pathname: string) => {
  const { data: allEvents } = useQuery({
    queryKey: [
      pathname === '/'
        ? QUERY_KEY.SHOW
        : pathname === '/events'
        ? QUERY_KEY.PROMOTION
        : QUERY_KEY.RECRUITMENT,
      pageNumber,
    ],
    queryFn: () => getAllEvents({ pageNumber, category }),
    suspense: true,
  });

  const { data, pageData } = allEvents ?? {};

  return { events: data, pageData };
};

export default useAllEventsQuery;

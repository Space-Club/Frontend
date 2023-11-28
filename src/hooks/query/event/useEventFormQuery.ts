import getEventForm from '@/apis/event/getEventForm';

import { useQuery } from '@tanstack/react-query';

interface UseEventFormQuery {
  eventId: string;
}

const QUERY_KEY = {
  EVENT_FORM: 'EVENT_FORM',
};

const useEventFormQuery = ({ eventId }: UseEventFormQuery) => {
  const { data: eventFormData } = useQuery({
    queryKey: [QUERY_KEY],
    queryFn: () => getEventForm({ eventId }),
  });

  return { eventFormData };
};

export default useEventFormQuery;

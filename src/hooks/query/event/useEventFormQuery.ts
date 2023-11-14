import getEventForm from '@/apis/event/getEventForm';

import { useQuery } from '@tanstack/react-query';

interface useEventFormQuery {
  eventId: string;
}

const useEventFormQuery = ({ eventId }: useEventFormQuery) => {
  const { data: eventFormData } = useQuery({
    queryKey: ['EVENT_FORM', eventId],
    queryFn: () => getEventForm({ eventId }),
  });

  return eventFormData;
};

export default useEventFormQuery;

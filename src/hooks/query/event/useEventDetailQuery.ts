import getEventDetail from '@/apis/event/getEventDetail';

import { useQuery } from '@tanstack/react-query';

interface useEventDetailQuery {
  eventId: string;
}

const useEventDetailQuery = ({ eventId }: useEventDetailQuery) => {
  const { data: eventDetail, isLoading: isEventDetailLoading } = useQuery(
    ['event_detail', `${eventId}`],
    () => getEventDetail({ id: eventId! }),
  );

  return { eventDetail, isEventDetailLoading };
};

export default useEventDetailQuery;

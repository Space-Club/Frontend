import getEventDetail from '@/apis/event/getEventDetail';
import { getEventDetailRequest } from '@/types/api/getEventDetail';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = { EVENT_DETAIL: 'EVENT_DETAIL' };

const useEventDetailQuery = ({ eventId }: getEventDetailRequest) => {
  const {
    data: eventDetail,
    isLoading: isEventDetailLoading,
    isSuccess: isEventDetailSuccess,
  } = useQuery({
    queryKey: [QUERY_KEY.EVENT_DETAIL, eventId],
    queryFn: () => getEventDetail({ eventId }),
  });

  return { eventDetail, isEventDetailLoading, isEventDetailSuccess };
};

export default useEventDetailQuery;

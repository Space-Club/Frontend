import getAppliedEvent from '@/apis/event/getAppliedEvent';
import { GetAppliedEventRequest } from '@/types/api/getAppliedEvent';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  APPLIED_EVENT: 'APPLIED_EVENT',
};

const useAppliedEventQuery = ({ pageNumber }: GetAppliedEventRequest) => {
  const { data: appliedEvent } = useQuery({
    queryKey: [QUERY_KEY.APPLIED_EVENT, pageNumber],
    queryFn: () => getAppliedEvent({ pageNumber }),
  });

  const { data, pageData } = appliedEvent ?? {};

  return { events: data, pageData };
};

export default useAppliedEventQuery;

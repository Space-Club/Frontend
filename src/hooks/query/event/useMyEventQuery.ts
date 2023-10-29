import { getMyEvent } from '@/apis/event/getMyEvent';
import { GetMyEventRequest } from '@/types/event';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = {
  MY_EVENT: 'MY_EVENT',
};

const useMyEventQuery = ({ pageNumber }: GetMyEventRequest) => {
  const { data: myEvent } = useQuery({
    queryKey: [QUERY_KEY.MY_EVENT, pageNumber],
    queryFn: () => getMyEvent({ pageNumber }),
  });

  return { myEvent };
};

export default useMyEventQuery;

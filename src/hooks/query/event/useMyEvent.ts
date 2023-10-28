import { getMyEvent } from '@/apis/event/getMyEvent';

import { useQuery } from '@tanstack/react-query';

interface UseMyEventProps {
  pageNumber: number;
}

const QUERY_KEN = {
  MY_EVENT: 'MY_EVENT',
};

const useMyEvent = ({ pageNumber }: UseMyEventProps) => {
  const { data: myEvent } = useQuery({
    queryKey: [QUERY_KEN.MY_EVENT, pageNumber],
    queryFn: () => getMyEvent({ pageNumber }),
  });

  return { myEvent };
};

export default useMyEvent;

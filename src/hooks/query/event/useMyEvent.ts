import { getMyEvent } from '@/apis/event/getMyEvent';

import { useQuery } from '@tanstack/react-query';

interface UseMyEventProps {
  pageNumber: number;
}

const QUERY_KEY = {
  MY_EVENT: 'MY_EVENT',
};

const useMyEvent = ({ pageNumber }: UseMyEventProps) => {
  const { data: myEvents } = useQuery({
    queryKey: [QUERY_KEY.MY_EVENT, pageNumber],
    queryFn: () => getMyEvent({ pageNumber }),
  });

  return { myEvents };
};

export default useMyEvent;

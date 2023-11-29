import getMainBannerEvents from '@/apis/event/getMainBannerEvents';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = {
  MAIN_BANNER_EVENTS: 'mainBannerEvents',
};

const useGetMainBannerQuery = () => {
  const { data: mainBannerEvents } = useQuery({
    queryFn: getMainBannerEvents,
    queryKey: [QUERY_KEY.MAIN_BANNER_EVENTS],
  });
  return mainBannerEvents;
};

export default useGetMainBannerQuery;

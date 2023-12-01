import getIsBookmark from '@/apis/event/getIsBookmark';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { GET_IS_BOOKMARKED: 'GET_IS_BOOKMARKED' };

interface UseIsBookmarkedQuery {
  eventId: string;
  isEnabled?: boolean;
}

const useIsBookmarkedQuery = ({ eventId, isEnabled }: UseIsBookmarkedQuery) => {
  const { data: isBookmarked } = useQuery({
    queryFn: () => getIsBookmark({ eventId }),
    queryKey: [QUERY_KEY, eventId],
    enabled: isEnabled,
  });

  return { isBookmarked };
};

export default useIsBookmarkedQuery;

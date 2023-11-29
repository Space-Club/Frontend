import getIsBookmark from '@/apis/event/getIsBookmark';
import { GetIsBookmarkRequest } from '@/types/api/getIsBookmark';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { GET_IS_BOOKMARKED: 'GET_IS_BOOKMARKED' };

const useIsBookmarkedQuery = ({ eventId }: GetIsBookmarkRequest) => {
  const { data: isBookmarked } = useQuery({
    queryFn: () => getIsBookmark({ eventId }),
    queryKey: [QUERY_KEY, eventId],
  });

  return { isBookmarked };
};

export default useIsBookmarkedQuery;

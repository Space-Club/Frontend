import getEventBookmark from '@/apis/event/getEventBookmark';
import { GetEventBookmarkRequest } from '@/types/api/getEventBookmark';

import { useQuery } from '@tanstack/react-query';

const QUERY_KEY = {
  GET_EVENT_BOOKMARK: 'getEventBookmark',
};

const useGetEventBookMarkQuery = ({ page, size, sort }: GetEventBookmarkRequest) => {
  const { data: bookmarks } = useQuery({
    queryFn: () => getEventBookmark({ page, size, sort }),
    queryKey: [QUERY_KEY.GET_EVENT_BOOKMARK, { page, size, sort }],
  });

  return { bookmarks };
};

export default useGetEventBookMarkQuery;

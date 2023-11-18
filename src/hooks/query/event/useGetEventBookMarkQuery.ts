import getEventBookmark from '@/apis/event/getEventBookmark';
import { GetEventBookmarkRequest } from '@/types/api/getEventBookmark';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = {
  GET_EVENT_BOOKMARK: 'getEventBookmark',
};

const useGetEventBookMarkQuery = ({ page, size, sort }: GetEventBookmarkRequest) => {
  const { data } = useQuery({
    queryFn: () => getEventBookmark({ page, size, sort }),
    queryKey: [QUERY_KEY.GET_EVENT_BOOKMARK, { page, size, sort }],
  });

  const bookmarks = data?.data;
  const pageData = data?.pageData;

  return { bookmarks, pageData };
};

export default useGetEventBookMarkQuery;

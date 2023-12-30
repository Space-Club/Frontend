import getClubPosts from '@/apis/club/getClubPosts';
import { GetClubPostsRequest } from '@/types/api/getClubPosts';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_POSTS: 'CLUB_POSTS' };

const CLUB_POSTS_STALE_TIME = 1000 * 60;

const useGetClubPostsQuery = ({ clubId, pageNumber }: GetClubPostsRequest) => {
  const { data: clubPosts } = useQuery({
    queryKey: [QUERY_KEY.CLUB_POSTS, clubId, pageNumber],
    queryFn: () => getClubPosts({ clubId, pageNumber }),
    staleTime: CLUB_POSTS_STALE_TIME,
  });

  const { posts, pageData } = clubPosts ?? {};

  return { posts, pageData };
};

export default useGetClubPostsQuery;

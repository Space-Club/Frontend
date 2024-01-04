import getClubPost from '@/apis/club/getClubPost';
import { GetClubPostRequest } from '@/types/api/getClubPost';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { GET_CLUB_POST_DETAIL: 'GET_CLUB_POST_DETAIL' };

const useGetClubPostDetail = ({ clubId, postId }: GetClubPostRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY, clubId, postId],
    queryFn: () => getClubPost({ clubId, postId }),
  });

  return { clubPostDetail: data };
};

export default useGetClubPostDetail;

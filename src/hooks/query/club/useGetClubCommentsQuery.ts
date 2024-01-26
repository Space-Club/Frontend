import getClubComments from '@/apis/club/getClubComments';
import { GetClubCommentsRequest } from '@/types/api/getClubComments';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { CLUB_COMMENTS: 'CLUB_COMMENTS' };

const useGetClubCommentsQuery = ({ postId, pageNumber }: GetClubCommentsRequest) => {
  const { data: comments } = useQuery({
    queryKey: [QUERY_KEY.CLUB_COMMENTS, postId, pageNumber],
    queryFn: () => getClubComments({ postId, pageNumber }),
  });

  const { data, pageData } = comments ?? {};

  return { clubPostComments: data, pageData };
};

export default useGetClubCommentsQuery;

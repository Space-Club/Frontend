import { END_POINTS } from '@/constants/api';
import { getClubCommentsRequest, getClubCommentsResponse } from '@/types/api/getClubComments';

import { axiosClientWithAuth } from '../axiosClient';

const getClubComments = async ({ postId, pageNumber }: getClubCommentsRequest) => {
  const { data } = await axiosClientWithAuth.get<getClubCommentsResponse>(
    END_POINTS.CLUB_COMMENTS(postId, pageNumber),
  );

  return data;
};

export default getClubComments;

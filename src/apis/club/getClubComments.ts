import { END_POINTS } from '@/constants/api';
import { GetClubCommentsRequest, GetClubCommentsResponse } from '@/types/api/getClubComments';

import { axiosClientWithAuth } from '../axiosClient';

const getClubComments = async ({ postId, pageNumber }: GetClubCommentsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubCommentsResponse>(
    END_POINTS.CLUB_COMMENTS(postId, pageNumber),
  );

  return data;
};

export default getClubComments;

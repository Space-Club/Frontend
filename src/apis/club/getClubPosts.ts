import { END_POINTS } from '@/constants/api';
import { GetClubPostsRequest, GetClubPostsResponse } from '@/types/api/getClubPosts';

import { axiosClientWithAuth } from '../axiosClient';

const getClubPosts = async ({ clubId, pageNumber }: GetClubPostsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubPostsResponse>(
    END_POINTS.CLUB_POSTS(clubId, pageNumber),
  );

  return data;
};

export default getClubPosts;

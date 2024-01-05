import { END_POINTS } from '@/constants/api';
import { GetClubPostRequest, GetClubPostResponse } from '@/types/api/getClubPost';

import { axiosClientWithAuth } from '../axiosClient';

const getClubPost = async ({ clubId, postId }: GetClubPostRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubPostResponse>(
    END_POINTS.CLUB_POST(clubId, postId),
  );

  return data;
};

export default getClubPost;

import { END_POINTS } from '@/constants/api';
import { DeleteClubPostRequest } from '@/types/api/deleteClubPost';

import { axiosClientWithAuth } from '../axiosClient';

const deleteClubPost = async ({ postId }: DeleteClubPostRequest) => {
  await axiosClientWithAuth.delete(END_POINTS.DELETE_CLUB_POST(postId));
};

export default deleteClubPost;

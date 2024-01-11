import { END_POINTS } from '@/constants/api';
import { PostClubCommentRequest } from '@/types/api/postClubComment';

import { axiosClientWithAuth } from '../axiosClient';

const postClubComment = async ({ postId, content, isPrivate }: PostClubCommentRequest) => {
  await axiosClientWithAuth.post(END_POINTS.CLUB_COMMENT(postId), {
    content,
    isPrivate,
  });
};

export default postClubComment;

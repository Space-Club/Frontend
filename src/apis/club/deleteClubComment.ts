import { END_POINTS } from '@/constants/api';
import { DeleteClubCommentRequest } from '@/types/api/deleteClubComment';

import { axiosClientWithAuth } from '../axiosClient';

const deleteClubComment = async ({ commentId }: DeleteClubCommentRequest) => {
  await axiosClientWithAuth.delete(END_POINTS.DELETE_CLUB_COMMENT(commentId));
};

export default deleteClubComment;

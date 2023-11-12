import { END_POINTS } from '@/constants/api';
import { PostClubNoticeRequest, PostClubNoticeResponse } from '@/types/api/postClubNotice';

import { axiosClientWithAuth } from '../axiosClient';

const postClubNotice = async ({ clubId, notice }: PostClubNoticeRequest) => {
  const { data } = await axiosClientWithAuth.post<PostClubNoticeResponse>(
    END_POINTS.POST_CLUB_NOTICE({ clubId }),
    {
      notice,
    },
  );
  return data;
};

export default postClubNotice;

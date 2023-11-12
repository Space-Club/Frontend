import { END_POINTS } from '@/constants/api';
import { DeleteClubNoticeRequest, DeleteClubNoticeResponse } from '@/types/api/deleteClubNotice';

import { axiosClientWithAuth } from '../axiosClient';

const deleteClubNotice = async ({ clubId, noticeId }: DeleteClubNoticeRequest) => {
  const { data } = await axiosClientWithAuth.delete<DeleteClubNoticeResponse>(
    END_POINTS.DELETE_CLUB_NOTICE({ clubId, noticeId }),
  );
  return data;
};

export default deleteClubNotice;

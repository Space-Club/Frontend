import { END_POINTS } from '@/constants/api';
import { PatchClubNoticeRequest, PatchClubNoticeResponse } from '@/types/api/patchClubNotice';

import { axiosClientWithAuth } from '../axiosClient';

const patchClubNotice = async ({ clubId, noticeId, notice }: PatchClubNoticeRequest) => {
  const { data } = await axiosClientWithAuth.patch<PatchClubNoticeResponse>(
    END_POINTS.PATCH_CLUB_NOTICE({ clubId, noticeId }),
    { notice },
  );
  return data;
};

export default patchClubNotice;

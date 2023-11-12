import { END_POINTS } from '@/constants/api';
import { GetClubNoticeRequest, GetClubNoticeResponse } from '@/types/api/getClubNotice';

import { axiosClientWithAuth } from '../axiosClient';

const getClubNotice = async ({ clubId }: GetClubNoticeRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubNoticeResponse>(
    `${END_POINTS.GET_CLUB_NOTICE({ clubId })}`,
  );
  return data;
};

export default getClubNotice;

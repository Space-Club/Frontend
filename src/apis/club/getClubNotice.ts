import { END_POINTS } from '@/constants/api';
import { GetClubEventsRequest, GetClubEventsResponse } from '@/types/club';

import { axiosClientWithAuth } from '../axiosClient';

const getClubNotice = async ({ clubId }: GetClubEventsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubEventsResponse>(
    `${END_POINTS.GET_CLUB_NOTICE({ clubId })}`,
  );
  return data;
};

export default getClubNotice;

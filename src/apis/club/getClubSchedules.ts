import { END_POINTS } from '@/constants/api';
import { GetClubSchedulesRequest, GetClubSchedulesResponse } from '@/types/api/getClubSchedules';

import { axiosClientWithAuth } from '../axiosClient';

const getClubSchedules = async ({ clubId }: GetClubSchedulesRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubSchedulesResponse>(
    END_POINTS.CLUB_SCHEDULES({ clubId }),
  );

  return data;
};

export default getClubSchedules;

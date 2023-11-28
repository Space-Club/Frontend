import { END_POINTS } from '@/constants/api';
import { GetClubEventsRequest, GetClubEventsResponse } from '@/types/api/getClubEvents';

import { axiosClientWithAuth } from '../axiosClient';

const getClubEvents = async ({ clubId, pageNumber = 0, isSchedule }: GetClubEventsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubEventsResponse>(
    isSchedule
      ? END_POINTS.CLUB_SCHEDULES({ clubId })
      : END_POINTS.CLUB_EVENTS({ clubId, pageNumber }),
  );
  return data;
};

export default getClubEvents;

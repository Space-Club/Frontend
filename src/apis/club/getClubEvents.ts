import { END_POINTS } from '@/constants/api';
import { GetClubEventsRequest, GetClubEventsResponse } from '@/types/api/getClubEvents';

import { axiosClientWithAuth } from '../axiosClient';

const getClubEvents = async ({ clubId, pageNumber }: GetClubEventsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubEventsResponse>(
    END_POINTS.CLUB_EVENTS({ clubId, pageNumber }),
  );
  return data;
};

export default getClubEvents;

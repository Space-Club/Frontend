import { END_POINTS } from '@/constants/api';
import { GetClubEventsRequest, GetClubEventsResponse } from '@/types/club';

import { axiosClientWithAuth } from '../axiosClient';

const getClubEvents = async ({ clubId, pageNumber }: GetClubEventsRequest) => {
  const { data } = await axiosClientWithAuth.get<GetClubEventsResponse>(
    `${END_POINTS.CLUB_EVENTS({ clubId })}?page=${pageNumber}&size=3&sort=id%2C,asc`,
  );
  return data;
};

export default getClubEvents;

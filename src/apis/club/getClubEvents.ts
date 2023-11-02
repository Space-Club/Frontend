import { END_POINTS } from '@/constants/api';
import { GetClubEventsRequest, GetClubEventsResponse } from '@/types/club';

import { axiosClient } from '../axiosClient';

const getClubEvents = async ({ pageNumber }: GetClubEventsRequest) => {
  const { data } = await axiosClient.get<GetClubEventsResponse>(
    `${END_POINTS.CLUB_EVENTS}?page=${pageNumber}&size=3&sort=id%2C,asc`,
  );
  return data;
};

export default getClubEvents;

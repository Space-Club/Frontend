import { END_POINTS } from '@/constants/api';
import { GetAllEventsRequest, GetAllEventsResponse } from '@/types/event';

import { axiosClient } from '../axiosClient';

const getAllEvents = async ({ pageNumber }: GetAllEventsRequest) => {
  const { data } = await axiosClient.get<GetAllEventsResponse>(
    `${END_POINTS.ALL_EVENTS}?page${pageNumber}$size={10}&sort=startDate,desc`,
  );
  return data;
};

export default getAllEvents;

import { END_POINTS } from '@/constants/api';
import { GetAllEventsRequest, GetAllEventsResponse } from '@/types/event';

import { axiosClient } from '../axiosClient';

const getAllEvents = async ({ pageNumber, category, sort }: GetAllEventsRequest) => {
  const { data } = await axiosClient.get<GetAllEventsResponse>(
    `${END_POINTS.ALL_EVENTS}?category=${category}&page=${pageNumber}&size=18&sort=${sort},desc`,
  );
  return data;
};
export default getAllEvents;

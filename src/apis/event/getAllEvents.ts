import { END_POINTS } from '@/constants/api';
import { AllEventsRequest, AllEventsResponse } from '@/types/api/allEvents';

import { axiosClient } from '../axiosClient';

const getAllEvents = async ({ pageNumber, category, sort }: AllEventsRequest) => {
  const { data } = await axiosClient.get<AllEventsResponse>(
    `${END_POINTS.ALL_EVENTS}?category=${category}&page=${pageNumber}&size=18&sort=${sort},desc`,
  );
  return data;
};
export default getAllEvents;

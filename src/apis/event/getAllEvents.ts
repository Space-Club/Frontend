import { END_POINTS } from '@/constants/api';
import { AllEventsRequest, AllEventsResponse } from '@/types/api/allEvents';

import { axiosClient } from '../axiosClient';

const getAllEvents = async ({ pageNumber, category }: AllEventsRequest) => {
  const { data } = await axiosClient.get<AllEventsResponse>(
    END_POINTS.ALL_EVENTS({ category, pageNumber }),
  );
  return data;
};
export default getAllEvents;

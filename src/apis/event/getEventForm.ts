import { END_POINTS } from '@/constants/api';
import { getEventFormRequest, getEventFormResponse } from '@/types/api/getEventForm';

import { axiosClientWithAuth } from '../axiosClient';

const getEventForm = async ({ eventId }: getEventFormRequest) => {
  const { data } = await axiosClientWithAuth.get<getEventFormResponse>(
    END_POINTS.GET_EVENT_FORM(eventId),
  );

  return data;
};

export default getEventForm;

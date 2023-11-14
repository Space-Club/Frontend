import { END_POINTS } from '@/constants/api';
import { getEventFormResponse } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

interface getEventForm {
  eventId: string;
}

const getEventForm = async ({ eventId }: getEventForm) => {
  const { data } = await axiosClientWithAuth.get<getEventFormResponse>(
    END_POINTS.GET_EVENT_FORM(eventId),
  );

  return data;
};

export default getEventForm;

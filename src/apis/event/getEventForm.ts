import { END_POINTS } from '@/constants/api';
import { getEventDetailResponse } from '@/types/api/getEventDetail';
import { getEventFormRequest } from '@/types/api/getEventForm';

import { axiosClientWithAuth } from '../axiosClient';

const getEventForm = async ({ eventId }: getEventFormRequest) => {
  const { data } = await axiosClientWithAuth.get<getEventDetailResponse>(
    END_POINTS.GET_EVENT_FORM(eventId),
  );

  return data;
};

export default getEventForm;

import { END_POINTS } from '@/constants/api';
import { getEventDetailRequest, getEventDetailResponse } from '@/types/api/getEventDetail';

import { axiosClientWithAuth } from '../axiosClient';

const getEventDetail = async ({ eventId }: getEventDetailRequest) => {
  const { data } = await axiosClientWithAuth.get<getEventDetailResponse>(
    `${END_POINTS.GET_EVENT_DETAIL}/${eventId}`,
  );

  return data;
};

export default getEventDetail;

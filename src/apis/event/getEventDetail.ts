import { END_POINTS } from '@/constants/api';
import { getEventDetailResponse } from '@/types/event';

import { axiosClient } from '../axiosClient';

interface getEventDetail {
  id: string;
}

const getEventDetail = async ({ id }: getEventDetail) => {
  const { data } = await axiosClient.get<getEventDetailResponse>(
    `${END_POINTS.GET_EVENT_DETAIL}/${id}`,
  );

  return data;
};

export default getEventDetail;

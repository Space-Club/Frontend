import { END_POINTS } from '@/constants/api';
import { getEventDetailResponse } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

interface getEventDetail {
  id: string;
}

const getEventDetail = async ({ id }: getEventDetail) => {
  const { data } = await axiosClientWithAuth.get<getEventDetailResponse>(
    `${END_POINTS.GET_EVENT_DETAIL}/${id}`,
  );

  return data;
};

export default getEventDetail;

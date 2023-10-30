import { END_POINTS } from '@/constants/api';
import { PostEventApplyRequest } from '@/types/api/postEventApply';
import { GetMyEventResponse } from '@/types/event';

import { axiosClient } from '../axiosClient';

const postEventApply = async ({ userId, eventId }: PostEventApplyRequest) => {
  const { data } = await axiosClient.post<GetMyEventResponse>(`${END_POINTS.GET_MY_EVENT}`, {
    userId,
    eventId,
  });
  return data;
};

export default postEventApply;

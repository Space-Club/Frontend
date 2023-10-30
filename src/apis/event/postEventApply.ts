import { END_POINTS } from '@/constants/api';
import { PostEventApplyRequest } from '@/types/api/postEventApply';
import { GetMyEventResponse } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

const postEventApply = async ({ eventId }: PostEventApplyRequest) => {
  const { data } = await axiosClientWithAuth.post<GetMyEventResponse>(
    `${END_POINTS.GET_MY_EVENT}`,
    {
      eventId,
    },
  );
  return data;
};

export default postEventApply;

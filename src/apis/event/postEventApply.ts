import { END_POINTS } from '@/constants/api';
import { PostEventApplyRequest } from '@/types/api/postEventApply';
import { GetAppliedEventResponse } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

const postEventApply = async ({ eventId }: PostEventApplyRequest) => {
  const { data } = await axiosClientWithAuth.post<GetAppliedEventResponse>(
    `${END_POINTS.EVENT_APPLY}`,
    {
      eventId,
    },
  );
  return data;
};

export default postEventApply;

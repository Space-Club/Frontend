import { END_POINTS } from '@/constants/api';
import { PostEventApplyRequest, PostEventApplyResponse } from '@/types/api/postEventApply';

import { axiosClientWithAuth } from '../axiosClient';

const postEventApply = async ({ eventId }: PostEventApplyRequest) => {
  const { data } = await axiosClientWithAuth.post<PostEventApplyResponse>(
    `${END_POINTS.POST_EVENT_APPLY}`,
    {
      eventId,
    },
  );
  return data;
};

export default postEventApply;

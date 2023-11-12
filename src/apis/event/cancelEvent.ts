import { END_POINTS } from '@/constants/api';
import { CancelEventRequest, CancelEventResponse } from '@/types/api/cancelEvent';

import { axiosClientWithAuth } from '../axiosClient';

const cancelEvent = async ({ eventId }: CancelEventRequest) => {
  const { data } = await axiosClientWithAuth.delete<CancelEventResponse>(
    `${END_POINTS.CANCEL_EVENT({ eventId })}`,
  );

  return data;
};

export default cancelEvent;

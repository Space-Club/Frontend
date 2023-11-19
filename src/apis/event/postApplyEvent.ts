import { END_POINTS } from '@/constants/api';
import { postEventApplyRequest } from '@/types/forms';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async ({
  forms = [],
  ticketCount = null,
  eventId,
}: postEventApplyRequest) => {
  const data = {
    eventId,
    ticketCount,
    forms,
  };
  await axiosClientWithAuth.post(END_POINTS.EVENT_APPLY, data);
};

export default postApplyEvent;

import { END_POINTS } from '@/constants/api';
import { postEventApplyRequest } from '@/types/api/postApplyEvent';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async ({ forms = [], ticketCount = 1, eventId }: postEventApplyRequest) => {
  const data = {
    eventId,
    ticketCount,
    forms,
  };
  await axiosClientWithAuth.post(END_POINTS.EVENT_APPLY, data);
};

export default postApplyEvent;

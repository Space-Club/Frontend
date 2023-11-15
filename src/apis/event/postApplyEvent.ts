import { END_POINTS } from '@/constants/api';
import { postEventApplyRequest } from '@/types/forms';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async ({ forms, eventId }: postEventApplyRequest) => {
  const data = {
    eventId,
    forms,
  };
  await axiosClientWithAuth.post(END_POINTS.EVENT_APPLY, data);
};

export default postApplyEvent;
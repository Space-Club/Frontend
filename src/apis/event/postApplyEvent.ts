import { END_POINTS } from '@/constants/api';
<<<<<<< HEAD
import { postEventApplyRequest } from '@/types/forms';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async ({ forms, eventId }: postEventApplyRequest) => {
  const data = {
    eventId,
    forms,
  };
=======
import { postEventApplyRequest } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async (data: postEventApplyRequest) => {
>>>>>>> 560e010 (feat: 폼 신청 api 구현)
  await axiosClientWithAuth.post(END_POINTS.EVENT_APPLY, data);
};

export default postApplyEvent;

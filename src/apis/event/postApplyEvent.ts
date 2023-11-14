import { END_POINTS } from '@/constants/api';
import { postEventApplyRequest } from '@/types/event';

import { axiosClientWithAuth } from '../axiosClient';

const postApplyEvent = async (data: postEventApplyRequest) => {
  await axiosClientWithAuth.post(END_POINTS.EVENT_APPLY, data);
};

export default postApplyEvent;

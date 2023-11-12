import { END_POINTS } from '@/constants/api';
import { cancelEventRequest } from '@/types/api/cancelEvent';

import { axiosClientWithAuth } from '../axiosClient';

const cancelEvent = async ({ eventId }: cancelEventRequest) => {
  await axiosClientWithAuth.delete(`${END_POINTS.CANCEL_EVENT({ eventId })}`);
};

export default cancelEvent;

import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface deleteEvent {
  eventId: string;
}

const deleteEvent = async ({ eventId }: deleteEvent) => {
  await axiosClientWithAuth.delete(`${END_POINTS.GET_EVENT_DETAIL}/${eventId}`);
};

export default deleteEvent;

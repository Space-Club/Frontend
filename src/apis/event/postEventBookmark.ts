import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface postEventBookmark {
  eventId: string;
}

const postEventBookmark = async ({ eventId }: postEventBookmark) => {
  await axiosClientWithAuth.post(`${END_POINTS.BOOK_MARK}/${eventId}`);
};

export default postEventBookmark;

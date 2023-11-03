import { END_POINTS } from '@/constants/api';

import { axiosClient } from '../axiosClient';

interface postEventBookmark {
  eventId: string;
}

const postEventBookmark = async ({ eventId }: postEventBookmark) => {
  await axiosClient.post(`${END_POINTS.BOOK_MARK}/${eventId}`);
};

export default postEventBookmark;

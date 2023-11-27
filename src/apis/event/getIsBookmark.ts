import { END_POINTS } from '@/constants/api';
import { GetIsBookmarkRequest, GetIsBookmarkResponse } from '@/types/api/getIsBookmark';

import { axiosClientWithAuth } from '../axiosClient';

const getIsBookmark = async ({ eventId }: GetIsBookmarkRequest) => {
  const { data } = await axiosClientWithAuth.get<GetIsBookmarkResponse>(
    `${END_POINTS.BOOK_MARK(eventId)}`,
  );

  return data;
};

export default getIsBookmark;

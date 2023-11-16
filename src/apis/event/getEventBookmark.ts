import { END_POINTS } from '@/constants/api';
import { GetEventBookmarkRequest, GetEventBookmarkResponse } from '@/types/api/getEventBookmark';

import { axiosClientWithAuth } from '../axiosClient';

const getEventBookmark = async ({ page, size, sort }: GetEventBookmarkRequest) => {
  const { data } = await axiosClientWithAuth.get<GetEventBookmarkResponse>(
    END_POINTS.GET_BOOKMARK({ page, size, sort }),
  );
  return data;
};

export default getEventBookmark;

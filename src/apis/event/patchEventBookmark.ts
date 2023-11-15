import { END_POINTS } from '@/constants/api';
import { PatchEventBookmarkRequest } from '@/types/api/patchBookmark';

import { axiosClientWithAuth } from '../axiosClient';

const patchEventBookmark = async ({ eventId, bookmark }: PatchEventBookmarkRequest) => {
  await axiosClientWithAuth.patch(`${END_POINTS.BOOK_MARK(eventId)}`, { bookmark });
};

export default patchEventBookmark;

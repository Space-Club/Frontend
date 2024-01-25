import { END_POINTS } from '@/constants/api';
import { PutClubPostRequest } from '@/types/api/putClubPost';

import { axiosClientWithAuth } from '../axiosClient';

const putClubPost = async ({ postRequest, image, postId }: PutClubPostRequest) => {
  const formData = new FormData();

  if (postRequest) {
    const blobRequest = new Blob([JSON.stringify(postRequest)], { type: 'application/json' });
    formData.append('postRequest', blobRequest);
  }

  if (image) {
    formData.append('image', image);
  }

  await axiosClientWithAuth.put(END_POINTS.PUT_CLUB_POST(postId), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default putClubPost;

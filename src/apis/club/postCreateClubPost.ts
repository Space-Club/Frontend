import { END_POINTS } from '@/constants/api';
import { PostCreateClubPostRequest } from '@/types/api/postCreateClubPost';

import { axiosClientWithAuth } from '../axiosClient';

const postCreateClubPost = async ({ clubId, title, content, image }: PostCreateClubPostRequest) => {
  const dataTransform = {
    title,
    content,
  };
  const formData = new FormData();
  if (title || content) {
    const blobRequest = new Blob([JSON.stringify(dataTransform)], { type: 'application/json' });
    formData.append('postRequest', blobRequest);
  }

  if (image) {
    formData.append('image', image);
  }

  await axiosClientWithAuth.post(END_POINTS.CREATE_CLUB_POST(clubId), formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
};

export default postCreateClubPost;

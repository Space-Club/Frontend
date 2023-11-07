import { axiosClientWithAuth } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { CreateClubFormValue } from '@/types/club';

const postCreateClub = async ({ name, info, image }: CreateClubFormValue) => {
  const dataTransform = {
    name,
    info,
  };
  const formData = new FormData();
  const blobRequest = new Blob([JSON.stringify(dataTransform)], { type: 'application/json' });
  formData.append('request', blobRequest);
  console.log(Image);
  if (image) {
    formData.append('logoImage', image[0]);
  }

  const { headers } = await axiosClientWithAuth.post(END_POINTS.CREATE_CLUB, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return headers.location;
};

export default postCreateClub;

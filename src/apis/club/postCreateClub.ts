import { axiosClient } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';

export interface CreateClubFormValue {
  name: string;
  info: string;
  owner: string;
  image: FileList | null;
}

const postCreateClub = async ({ name, info, owner, image }: CreateClubFormValue) => {
  const dataTransform = {
    name,
    info,
    owner,
  };
  const formData = new FormData();
  const blobRequest = new Blob([JSON.stringify(dataTransform)], { type: 'application/json' });
  formData.append('request', blobRequest);

  if (image) {
    formData.append('thumbnail', image[0]);
  }

  const { data } = await axiosClient.post(END_POINTS.CREATE_CLUB, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });

  return data;
};

export default postCreateClub;

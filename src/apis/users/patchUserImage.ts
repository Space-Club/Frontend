import { END_POINTS } from '@/constants/api';
import { PatchUserImageRequest, PatchUserImageResponse } from '@/types/api/patchUserImage';

import { axiosClientWithAuth } from '../axiosClient';

const patchUserImage = async ({ userImage }: PatchUserImageRequest) => {
  const formData = new FormData();
  formData.append('userImage', userImage);
  await axiosClientWithAuth.patch<PatchUserImageResponse>(
    END_POINTS.PATCH_PROFILE_IMAGE,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export default patchUserImage;

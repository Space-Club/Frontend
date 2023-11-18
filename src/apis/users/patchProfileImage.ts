import { END_POINTS } from '@/constants/api';
import { PatchClubNoticeResponse } from '@/types/api/patchClubNotice';
import { PatchProfileImageRequest } from '@/types/api/patchProfileImage';

import { axiosClientWithAuth } from '../axiosClient';

const patchProfileImage = async ({ userImage }: PatchProfileImageRequest) => {
  const formData = new FormData();
  formData.append('userImage', userImage);

  await axiosClientWithAuth.patch<PatchClubNoticeResponse>(
    END_POINTS.PATCH_PROFILE_IMAGE,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );
};

export default patchProfileImage;

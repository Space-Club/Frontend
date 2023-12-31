import { axiosClientWithAuth } from '@/apis/axiosClient';
import { END_POINTS } from '@/constants/api';
import { EditClubSettingRequest, EditClubSettingResponse } from '@/types/api/editClubSetting';

const editClubSetting = async ({
  name,
  info,
  logoImage,
  coverImage,
  clubId,
}: EditClubSettingRequest) => {
  const dataTransform = {
    name,
    info,
  };
  const formData = new FormData();
  if (name || info) {
    const blobRequest = new Blob([JSON.stringify(dataTransform)], { type: 'application/json' });
    formData.append('request', blobRequest);
  }

  if (logoImage) {
    formData.append('logoImage', logoImage);
  }

  if (coverImage) {
    formData.append('coverImage', coverImage);
  }

  const { headers } = await axiosClientWithAuth.patch<EditClubSettingResponse>(
    END_POINTS.EDIT_CLUB_SETTING({ clubId }),
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return headers.location;
};

export default editClubSetting;

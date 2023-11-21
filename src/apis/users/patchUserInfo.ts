import { END_POINTS } from '@/constants/api';
import { PatchUserInfoRequest, PatchUserInfoResponse } from '@/types/api/patchUserInfo';

import { axiosClientWithAuth } from '../axiosClient';

const patchUserInfo = async ({ name, phoneNumber }: PatchUserInfoRequest) => {
  await axiosClientWithAuth.patch<PatchUserInfoResponse>(END_POINTS.PATCH_USER_INFO, {
    name,
    phoneNumber,
  });
};

export default patchUserInfo;
import { END_POINTS } from '@/constants/api';
import { PatchUserInfoRequest, PatchUserInfoResponse } from '@/types/api/patchUserInfo';

import { axiosClientWithAuth } from '../axiosClient';

const putUserInfo = async ({ name, phoneNumber }: PatchUserInfoRequest) => {
  const { data } = await axiosClientWithAuth.put<PatchUserInfoResponse>(END_POINTS.PUT_USER_INFO, {
    name,
    phoneNumber,
  });
  return data;
};

export default putUserInfo;

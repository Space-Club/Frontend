import { END_POINTS } from '@/constants/api';
import { PatchUserInfoRequest } from '@/types/api/patchUserInfo';

import { axiosClientWithAuth } from '../axiosClient';

const patchUserInfo = ({ name, phoneNumber }: PatchUserInfoRequest) => {
  axiosClientWithAuth.patch(END_POINTS.PATCH_USER_INFO, {
    name,
    phoneNumber,
  });
};

export default patchUserInfo;

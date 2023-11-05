import { END_POINTS } from '@/constants/api';
import { GetMyProfileInfoResponse } from '@/types/api/getMyProfileInfo';

import { axiosClientWithAuth } from '../axiosClient';

const getMyProfileInfo = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyProfileInfoResponse>(
    END_POINTS.GET_USER_INFO,
  );

  return data;
};

export default getMyProfileInfo;

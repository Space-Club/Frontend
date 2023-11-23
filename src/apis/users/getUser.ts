import { END_POINTS } from '@/constants/api';
import { GetMyProfileInfoResponse } from '@/types/api/getMyProfileInfo';

import { axiosClientWithAuth } from '../axiosClient';

const getUser = async () => {
  const { data } = await axiosClientWithAuth.get<GetMyProfileInfoResponse>(END_POINTS.MY_INFO);
  return data;
};

export default getUser;

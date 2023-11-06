import { END_POINTS } from '@/constants/api';

import { axiosClientWithAuth } from '../axiosClient';

interface GetUserImageResponse {
  profileImageUrl: string | null;
}

const getUser = async () => {
  const { data } = await axiosClientWithAuth.get<GetUserImageResponse>(`${END_POINTS.USER_IMAGE}`);
  return data;
};

export default getUser;

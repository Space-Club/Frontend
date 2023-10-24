import { User } from '@/types/user';

import { END_POINTS } from '@constants/api';

import { axiosClient } from '../axiosClient';

export const kakaoLogin = async (code: string) => {
  const { data } = await axiosClient.post<User>(END_POINTS.KAKAO_LOGIN, { code });
  return data;
};

import { END_POINTS } from '@/constants/api';

import { axiosClient } from '../axiosClient';

export const kakaoLogin = async (code: string) => {
  const { data } = await axiosClient.post(END_POINTS.KAKAO_LOGIN, { code });
  return data;
};

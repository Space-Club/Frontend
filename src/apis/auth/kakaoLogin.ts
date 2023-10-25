import { User } from '@/types/user';

import { END_POINTS } from '@constants/api';

import { axiosClient } from '../axiosClient';

interface KakaoLoginResponse extends User {
  isNewUser: boolean;
}

export const kakaoLogin = async (code: string) => {
  const { data } = await axiosClient.post<KakaoLoginResponse>(END_POINTS.KAKAO_LOGIN, { code });
  return data;
};

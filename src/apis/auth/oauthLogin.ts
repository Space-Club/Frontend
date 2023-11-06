import { OauthLoginRequest, OauthLoginResponse } from '@/types/api/authLogin';

import { END_POINTS } from '@constants/api';

import { axiosClient } from '../axiosClient';

export const oauthLogin = async ({ code }: OauthLoginRequest) => {
  const { data } = await axiosClient.post<OauthLoginResponse>(`${END_POINTS.KAKAO_LOGIN}`, {
    code,
  });
  return { data };
};

import { END_POINTS } from '@/constants/api';
import { MemberAuthRequest, MemberAuthResponse } from '@/types/api/memberAuth';

import { axiosClientWithAuth } from '../axiosClient';

const getMemberAuth = async ({ clubId }: MemberAuthRequest) => {
  const { data } = await axiosClientWithAuth.get<MemberAuthResponse>(
    END_POINTS.MEMBER_AUTH(clubId),
  );

  return data;
};

export default getMemberAuth;

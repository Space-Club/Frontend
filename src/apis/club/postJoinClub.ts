import { PATH } from '@/constants/path';
import { GetClubRequest, JoinClubRequest } from '@/types/api/getClub';

import { axiosClientWithAuth } from '../axiosClient';

const postJoinClub = async ({ inviteCode }: JoinClubRequest) => {
  const { data } = await axiosClientWithAuth.post<GetClubRequest>(PATH.CLUB.INVITE(inviteCode), {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return data;
};

export default postJoinClub;

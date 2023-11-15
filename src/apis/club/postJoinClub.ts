import { END_POINTS } from '@/constants/api';
import { GetClubRequest, JoinClubRequest } from '@/types/api/getClub';

import { axiosClientWithAuth } from '../axiosClient';

const postJoinClub = async ({ inviteCode }: JoinClubRequest) => {
  const { data } = await axiosClientWithAuth.post<GetClubRequest>(
    END_POINTS.INVITE_CLUB_CODE(inviteCode),
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return data;
};

export default postJoinClub;

import { END_POINTS } from '@/constants/api';
import { InviteClubResponse, JoinClubRequest } from '@/types/api/getClub';

import { axiosClient } from '../axiosClient';

const getInviteClubInfo = async ({ inviteCode }: JoinClubRequest) => {
  console.log('clubinfoquery');

  const { data } = await axiosClient.get<InviteClubResponse>(
    END_POINTS.INVITE_CLUB_CODE(inviteCode),
  );
  return data;
};

export default getInviteClubInfo;

import { PATH } from '@/constants/path';
import { InviteClubResponse, JoinClubRequest } from '@/types/api/getClub';

import { axiosClient } from '../axiosClient';

const getInviteClubInfo = async ({ inviteCode }: JoinClubRequest) => {
  const { data } = await axiosClient.get<InviteClubResponse>(PATH.CLUB.INVITE(inviteCode));
  return data;
};

export default getInviteClubInfo;

import { InviteClubResponse, JoinClubRequest } from '@/types/api/getClub';

import { axiosClient } from '../axiosClient';

const getInviteClubInfo = async ({ inviteCode }: JoinClubRequest) => {
  const { data } = await axiosClient.get<InviteClubResponse>(`clubs/invite/${inviteCode}`);
  return data;
};

export default getInviteClubInfo;

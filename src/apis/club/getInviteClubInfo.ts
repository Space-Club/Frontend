import { InviteClubResponse } from '@/types/club';

import { axiosClient } from '../axiosClient';

const getInviteClubInfo = async (inviteCode: string) => {
  const { data } = await axiosClient.get<InviteClubResponse>(`clubs/invite/${inviteCode}`);
  return data;
};

export default getInviteClubInfo;

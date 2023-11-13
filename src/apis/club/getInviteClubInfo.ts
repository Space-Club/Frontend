import { JoinClubResponse } from '@/types/club';

import { axiosClientWithAuth } from '../axiosClient';

const getInviteClubInfo = async (inviteCode: string) => {
  const { data } = await axiosClientWithAuth.get<JoinClubResponse>(`clubs/invite/${inviteCode}`);
  //#TODO: 토큰 없는 걸로 바꾸기
  return data;
};

export default getInviteClubInfo;

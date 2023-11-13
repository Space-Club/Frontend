import { axiosClientWithAuth } from '../axiosClient';

type JoinClubResponse = { clubId: string };

const postJoinClub = async (inviteCode: string): Promise<JoinClubResponse> => {
  const { data } = await axiosClientWithAuth.post(`clubs/invite/${inviteCode}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return data;
};

export default postJoinClub;

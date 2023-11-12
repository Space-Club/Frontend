import { axiosClientWithAuth } from '../axiosClient';

const postJoinClub = async (inviteCode: string) => {
  const { data } = await axiosClientWithAuth.post(`clubs/invite/${inviteCode}`, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });

  return data;
};

export default postJoinClub;

import { END_POINTS } from '@/constants/api';
import { getInviteLinkResponse } from '@/types/club';
import { getStorage } from '@/utils/localStorage';

import { axiosClient } from '../axiosClient';

const getInviteLink = async () => {
  const token = await getStorage('token');
  const { data } = await axiosClient.get<getInviteLinkResponse>(`${END_POINTS.INVITE_LINK}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return data;
};

export default getInviteLink;

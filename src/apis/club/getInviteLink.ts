import { END_POINTS } from '@/constants/api';
import { getInviteLinkResponse } from '@/types/club';

import { axiosClient } from '../axiosClient';

const getInviteLink = async () => {
  const { data } = await axiosClient.get<getInviteLinkResponse>(`${END_POINTS.INVITE_LINK}`);

  return data;
};

export default getInviteLink;

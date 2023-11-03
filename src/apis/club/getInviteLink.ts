import { END_POINTS } from '@/constants/api';
import { getInviteLinkResponse } from '@/types/club';

import { axiosClientWithAuth } from '../axiosClient';

interface getInviteLink {
  clubId: string;
}

const getInviteLink = async ({ clubId }: getInviteLink) => {
  const { data } = await axiosClientWithAuth.post<getInviteLinkResponse>(
    `${END_POINTS.INVITE_LINK(clubId)}`,
  );

  return data;
};

export default getInviteLink;

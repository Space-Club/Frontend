import { END_POINTS } from '@/constants/api';
import { getInviteLinkRequest, getInviteLinkResponse } from '@/types/api/getInviteLink';

import { axiosClientWithAuth } from '../axiosClient';

const getInviteLink = async ({ clubId }: getInviteLinkRequest) => {
  const { data } = await axiosClientWithAuth.get<getInviteLinkResponse>(
    END_POINTS.INVITE_LINK(clubId),
  );

  return data;
};

export default getInviteLink;

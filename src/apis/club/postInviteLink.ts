import { END_POINTS } from '@/constants/api';
import { postInviteLinkResponse } from '@/types/club';

import { axiosClientWithAuth } from '../axiosClient';

interface postInviteLink {
  clubId: string;
}

const postInviteLink = async ({ clubId }: postInviteLink) => {
  const { data } = await axiosClientWithAuth.post<postInviteLinkResponse>(
    `${END_POINTS.INVITE_LINK(clubId)}`,
    null,
    {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    },
  );

  return data;
};

export default postInviteLink;

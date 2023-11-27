import getInviteLink from '@/apis/club/getInviteLink';
import { getInviteLinkRequest } from '@/types/api/getInviteLink';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { GET_CLUB_INVITELINK: 'GET_CLUB_INVITELINK' };

const useGetInviteClub = ({ clubId }: getInviteLinkRequest) => {
  const { data } = useQuery({
    queryKey: [QUERY_KEY, clubId],
    queryFn: () => getInviteLink({ clubId }),
  });

  if (data?.inviteLink) {
    const inviteLinkData = {
      inviteLink: 'https://spaceclub.vercel.app' + data.inviteLink.split('/api/v1')[1],
      isExpired: data.isExpired,
    };
    return { inviteLinkData };
  }

  return { inviteLinkData: data };
};

export default useGetInviteClub;

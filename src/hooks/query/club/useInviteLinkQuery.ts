import postInviteLink from '@/apis/club/postInviteLink';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

export const QUERY_KEY = { INVITE_LINK: 'INVITE_LINK' };

const useInviteLinkQuery = () => {
  const { clubId = '' } = useParams();
  const { data, refetch } = useQuery([QUERY_KEY.INVITE_LINK], () => postInviteLink({ clubId }), {
    enabled: false,
    initialData: {
      inviteLink: '',
    },
  });

  const inviteLink = 'https://spaceclub.vercel.app' + data.inviteLink.split('/api/v1')[1];

  return { inviteLink, refetch };
};

export default useInviteLinkQuery;

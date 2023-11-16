import postInviteLink from '@/apis/club/postInviteLink';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

const useInviteLinkQuery = () => {
  const { clubId = '' } = useParams();
  const { data, refetch } = useQuery(['inviteLink'], () => postInviteLink({ clubId }), {
    enabled: false,
    initialData: {
      inviteLink: '',
    },
  });

  const inviteLink = 'https://spaceclub.vercel.app' + data.inviteLink.split('/api/v1')[1];

  return { inviteLink, refetch };
};

export default useInviteLinkQuery;

import postInviteLink from '@/apis/club/postInviteLink';

import { useParams } from 'react-router-dom';

import { useQuery } from '@tanstack/react-query';

const useInviteLinkQuery = () => {
  const { clubId = '' } = useParams();
  const { data, refetch } = useQuery(['inviteLink'], () => postInviteLink({ clubId }), {
    enabled: false,
    initialData: {
      invitationCode: '',
    },
  });

  return { data, refetch };
};

export default useInviteLinkQuery;

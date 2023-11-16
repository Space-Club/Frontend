import postInviteLink from '@/apis/club/postInviteLink';
import { SPACECLUB_BASE_URL } from '@/constants/api';

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

  const inviteLink = `${SPACECLUB_BASE_URL}` + data.inviteLink.split('/api/v1')[1];

  return { inviteLink, refetch };
};

export default useInviteLinkQuery;

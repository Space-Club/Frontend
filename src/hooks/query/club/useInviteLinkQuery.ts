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

  if (data.inviteLink) {
    const inviteLink = 'https://spaceclub.vercel.app' + data.inviteLink.split('/api/v1')[1];
    return { inviteLink, refetch };
  } else {
    const inviteLink = '오른쪽 버튼을 눌러 초대링크를 생성해보세요!';
    return { inviteLink, refetch };
  }
};

export default useInviteLinkQuery;

import postInviteLink from '@/apis/club/postInviteLink';

import { useParams } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

export const QUERY_KEY = { INVITE_LINK: 'INVITE_LINK' };

const useInviteLinkMutation = () => {
  const { clubId = '' } = useParams();
  const { mutate: createInviteLink, data } = useMutation({
    mutationFn: () => postInviteLink({ clubId }),
  });

  if (data?.Location) {
    const inviteLink = 'https://spaceclub.vercel.app' + data.Location.split('/api/v1')[1];
    return { inviteLink, createInviteLink };
  } else {
    const inviteLink = '오른쪽 버튼을 눌러 초대링크를 생성해보세요!';
    return { inviteLink, createInviteLink };
  }
};

export default useInviteLinkMutation;

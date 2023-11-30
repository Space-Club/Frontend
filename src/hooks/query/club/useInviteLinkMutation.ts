import postInviteLink from '@/apis/club/postInviteLink';
import useToast from '@/hooks/useToast';
import transInviteLink from '@/utils/transInviteLink';

import { useParams } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

export const QUERY_KEY = { INVITE_LINK: 'INVITE_LINK' };

const useInviteLinkMutation = () => {
  const { clubId = '' } = useParams();
  const { createToast } = useToast();
  const { mutate: createInviteLink, data } = useMutation({
    mutationFn: () => postInviteLink({ clubId }),
    onSuccess: () => {
      createToast({ message: '초대링크가 생성되었습니다.', toastType: 'info' });
    },
  });

  return { inviteLink: data && transInviteLink(data?.location), createInviteLink };
};

export default useInviteLinkMutation;

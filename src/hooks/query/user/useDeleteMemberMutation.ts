import deleteMember from '@/apis/users/deleteMember';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../club/useClubMembersQuery';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: withdrawMember } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB_MEMBERS]);
      createToast({ message: '멤버를 삭제했습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '멤버를 삭제하는 데 실패했습니다. ', toastType: 'error' });
    },
  });

  return { withdrawMember };
};

export default useDeleteMemberMutation;

import deleteMember from '@/apis/users/deleteMember';

import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: withdrawMember, ...lefts } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries(['clubMembers']); //TODO: clubMembers 캐시 데이터stale시켜서 refetch
    },
    onError: () => {}, //TODO: 에러 발생했습니다 toast 띄우기
  });

  return { withdrawMember, ...lefts };
};

export default useDeleteMemberMutation;

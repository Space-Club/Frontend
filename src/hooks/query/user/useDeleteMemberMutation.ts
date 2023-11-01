import deleteMember from '@/apis/users/deleteMember';

import { useMutation, useQueryClient } from '@tanstack/react-query';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: withdrawMember, ...others } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries(['clubMembers']);
    },
    onError: () => {}, //TODO: 에러 발생했습니다 toast 띄우기
  });

  return { withdrawMember, ...others };
};

export default useDeleteMemberMutation;

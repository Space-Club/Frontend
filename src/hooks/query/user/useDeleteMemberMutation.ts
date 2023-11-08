import deleteMember from '@/apis/users/deleteMember';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../club/useClubMembersQuery';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: withdrawMember } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY]);
    },
    onError: () => {}, //TODO: 에러 발생했습니다 toast 띄우기
  });

  return { withdrawMember };
};

export default useDeleteMemberMutation;

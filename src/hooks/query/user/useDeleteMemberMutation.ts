import deleteMember from '@/apis/users/deleteMember';

import { useMutation } from '@tanstack/react-query';

const useDeleteMemberMutation = () => {
  const { mutate: withdrawMember } = useMutation({
    mutationFn: deleteMember,
    onError: () => {}, //TODO: 에러 발생했습니다 toast 띄우기
  });

  return { withdrawMember };
};

export default useDeleteMemberMutation;

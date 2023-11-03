import patchMemberRole from '@/apis/users/patchMemberRole';

import { useMutation } from '@tanstack/react-query';

const usePatchMemberRoleMutation = () => {
  const { mutate: changeMemberRole } = useMutation({
    mutationFn: patchMemberRole,
    onError: () => {}, //TODO: 400 status 적어도 한명의 관리자가 필요합니다 Toast띄우기
  });

  return { changeMemberRole };
};

export default usePatchMemberRoleMutation;

import patchMemberRole from '@/apis/users/patchMemberRole';

import { useMutation } from '@tanstack/react-query';

const usePatchMemberRoleMutation = () => {
  const { mutate: changeMemberRole, ...others } = useMutation({
    mutationFn: patchMemberRole,
    onError: () => {}, //TODO: Toast띄우기
  });

  return { changeMemberRole, ...others };
};

export default usePatchMemberRoleMutation;

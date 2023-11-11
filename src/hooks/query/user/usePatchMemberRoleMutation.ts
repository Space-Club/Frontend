import patchMemberRole from '@/apis/users/patchMemberRole';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from '../club/useClubMembersQuery';

const usePatchMemberRoleMutation = () => {
  const queryClient = useQueryClient();

  const { mutate: changeMemberRole } = useMutation({
    mutationFn: patchMemberRole,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB_MEMBERS]);
    },
    onError: () => {}, //TODO: 400 status 적어도 한명의 관리자가 필요합니다 Toast띄우기
  });

  return { changeMemberRole };
};

export default usePatchMemberRoleMutation;

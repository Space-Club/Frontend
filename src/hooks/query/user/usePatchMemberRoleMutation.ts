import patchMemberRole from '@/apis/users/patchMemberRole';
import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from '../club/useClubMembersQuery';

const usePatchMemberRoleMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: changeMemberRole } = useMutation({
    mutationFn: patchMemberRole,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB_MEMBERS]);
    },
    onError: (error: AxiosError<HttpException>) => {
      if (error.response?.data.code === EXCEPTION_CODE.CAN_NOT_SELF_DEGRADING) {
        createToast({ message: '클럽에는 최소 한명의 관리자가 필요합니다', toastType: 'error' });
        return;
      }
    },
  });

  return { changeMemberRole };
};

export default usePatchMemberRoleMutation;

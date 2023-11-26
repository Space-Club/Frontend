import patchMemberRole from '@/apis/users/patchMemberRole';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
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
        createToast({ message: EXCEPTION_CODE_MESSAGE.CAN_NOT_SELF_DEGRADING, toastType: 'error' });
        return;
      }
    },
  });

  return { changeMemberRole };
};

export default usePatchMemberRoleMutation;

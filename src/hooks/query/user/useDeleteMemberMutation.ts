import deleteMember from '@/apis/users/deleteMember';
import { EXCEPTION_CODE } from '@/constants/exceptionCode';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from '../club/useClubMembersQuery';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: withdrawMember } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB_MEMBERS]);
    },
    onError: (error: AxiosError<HttpException>) => {
      if (error.response?.data.code === EXCEPTION_CODE.CAN_NOT_WITHDRAW) {
        createToast({ message: '최소 한명의 관리자가 필요합니다.', toastType: 'error' });
        return;
      }
      createToast({ message: '멤버를 삭제하는 데 실패했습니다. ', toastType: 'error' });
    },
  });

  return { withdrawMember };
};

export default useDeleteMemberMutation;

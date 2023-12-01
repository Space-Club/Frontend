import deleteMember from '@/apis/users/deleteMember';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY as CLUB_MEMBER_QUERY_KEY } from './useClubMembersQuery';
import { QUERY_KEY as MY_CLUB_QUERY_KEY } from './useClubs';

const useDeleteMemberMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: withdrawMember } = useMutation({
    mutationFn: deleteMember,
    onSuccess: () => {
      queryClient.invalidateQueries([CLUB_MEMBER_QUERY_KEY.GET_CLUB_MEMBERS]);
      queryClient.invalidateQueries([MY_CLUB_QUERY_KEY.MY_CLUB]);
    },
    onError: (error: AxiosError<HttpException>) => {
      if (error.response?.data.code === EXCEPTION_CODE.CAN_NOT_WITHDRAW) {
        createToast({ message: EXCEPTION_CODE_MESSAGE.CAN_NOT_WITHDRAW, toastType: 'error' });
        return;
      }
      createToast({ message: '멤버를 삭제하는 데 실패했습니다. ', toastType: 'error' });
    },
  });

  return { withdrawMember };
};

export default useDeleteMemberMutation;

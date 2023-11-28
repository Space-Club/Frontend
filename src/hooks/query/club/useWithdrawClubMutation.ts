import withdrawClub from '@/apis/club/withdrawClub';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { isAxiosError } from 'axios';

import { QUERY_KEY } from './useClubs';

interface ResponseDataType {
  code: string;
  exceptionName: string;
}

const useWithdrawClubMutation = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: withdrawClubMutate } = useMutation({
    mutationFn: withdrawClub,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      createToast({ message: '클럽 탈퇴가 완료되었습니다.', toastType: 'success' });
      navigate(PATH.MAIN);
    },
    onError: (error) => {
      if (isAxiosError<ResponseDataType>(error)) {
        const errorCode = error.response?.data['code']; //#TODO: 추후 에러코드만 오면 바꾸기
        createToast({
          message:
            errorCode === EXCEPTION_CODE.CAN_NOT_WITHDRAW
              ? EXCEPTION_CODE_MESSAGE.CAN_NOT_WITHDRAW
              : ERROR_MESSAGE.CLUB.WITHDRAW_FAILED,
          toastType: 'error',
        });
      } else {
        createToast({ message: '클럽 탈퇴에 실패했습니다.', toastType: 'error' });
      }
    },
  });

  return { withdrawClubMutate };
};

export default useWithdrawClubMutation;

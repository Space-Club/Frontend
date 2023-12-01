import deleteUser from '@/apis/users/deleteUser';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';
import { deleteStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

import { AxiosError } from 'axios';

const useDeleteUserMutation = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: withdrawService } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      createToast({ message: '회원탈퇴가 완료되었습니다.', toastType: 'success' });
      deleteStorage('token');
      navigate(PATH.LOGIN);
    },
    onError: (error: AxiosError<HttpException>) => {
      if (error.response?.data.code === EXCEPTION_CODE.USER_CANNOT_WITHDRAW) {
        createToast({ message: EXCEPTION_CODE_MESSAGE.USER_CANNOT_WITHDRAW, toastType: 'error' });
      }
    },
  });

  return { withdrawService };
};

export default useDeleteUserMutation;

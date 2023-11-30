import putUserInfo from '@/apis/users/putUserInfo';
import useTextException from '@/hooks/useTextException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';
import { setStorage } from '@/utils/localStorage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

const usePutUserInfoMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const { handleTextException } = useTextException();

  const { mutate: editUserInfo } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: ({ refreshToken, accessToken, userId }) => {
      setStorage('refreshToken', refreshToken);
      setStorage('token', accessToken);
      setStorage('userId', userId);
      createToast({ message: '회원정보가 수정되었습니다', toastType: 'success' });
      queryClient.clear();
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
    },
  });
  return { editUserInfo };
};

export default usePutUserInfoMutation;

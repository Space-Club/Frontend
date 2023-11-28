import putUserInfo from '@/apis/users/putUserInfo';
import useToast from '@/hooks/useToast';
import { setStorage } from '@/utils/localStorage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePutUserInfoMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: editUserInfo } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: ({ refreshToken, accessToken, userId }) => {
      setStorage('refreshToken', refreshToken);
      setStorage('token', accessToken);
      setStorage('userId', userId);
      createToast({ message: '회원정보가 수정되었습니다', toastType: 'success' });
      queryClient.clear();
    },
  });
  return { editUserInfo };
};

export default usePutUserInfoMutation;

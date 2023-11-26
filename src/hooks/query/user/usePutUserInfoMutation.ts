import putUserInfo from '@/apis/users/putUserInfo';
import { setStorage } from '@/utils/localStorage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

const usePutUserInfoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: editUserInfo } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: ({ refreshToken, accessToken, userId }) => {
      setStorage('refreshToken', refreshToken);
      setStorage('token', accessToken);
      setStorage('userId', userId);
      queryClient.clear();
    },
  });
  return { editUserInfo };
};

export default usePutUserInfoMutation;

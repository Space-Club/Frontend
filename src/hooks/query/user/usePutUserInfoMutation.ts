import putUserInfo from '@/apis/users/putUserInfo';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useMyProfile';

const usePutUserInfoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: editUserInfo } = useMutation({
    mutationFn: putUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_PROFILE]);
    },
  });
  return { editUserInfo };
};

export default usePutUserInfoMutation;

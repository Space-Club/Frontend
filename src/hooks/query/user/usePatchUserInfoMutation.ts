import patchUserInfo from '@/apis/users/patchUserInfo';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useMyProfile';

const usePatchUserInfoMutation = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationFn: patchUserInfo,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_PROFILE]);
    },
  });
  return mutate;
};

export default usePatchUserInfoMutation;

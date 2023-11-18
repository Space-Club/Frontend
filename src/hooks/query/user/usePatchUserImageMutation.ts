import patchUserImage from '@/apis/users/patchUserImage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useMyProfile';

const usePatchUserImageMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: editUserImage } = useMutation({
    mutationFn: patchUserImage,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_PROFILE]);
    },
  });
  return { editUserImage };
};

export default usePatchUserImageMutation;

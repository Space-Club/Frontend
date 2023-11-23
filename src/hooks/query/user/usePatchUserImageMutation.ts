import patchUserImage from '@/apis/users/patchUserImage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as PROFILE_KEY } from './useMyProfile';
import { QUERY_KEY as SIDE_BAR_KEY } from './useMyProfile';

const usePatchUserImageMutation = () => {
  const queryClient = useQueryClient();
  const { mutate: editUserImage } = useMutation({
    mutationFn: patchUserImage,
    onSuccess: () => {
      queryClient.invalidateQueries([PROFILE_KEY.MY_PROFILE]);
      queryClient.invalidateQueries([SIDE_BAR_KEY.MY_PROFILE]);
    },
  });
  return { editUserImage };
};

export default usePatchUserImageMutation;

import patchUserImage from '@/apis/users/patchUserImage';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as PROFILE_KEY } from './useMyProfile';
import { QUERY_KEY as SIDE_BAR_KEY } from './useMyProfile';

const usePatchUserImageMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: editUserImage } = useMutation({
    mutationFn: patchUserImage,
    onSuccess: () => {
      createToast({ message: '프로필 사진이 수정되었습니다', toastType: 'success' });
      queryClient.invalidateQueries([PROFILE_KEY.MY_PROFILE]);
      queryClient.invalidateQueries([SIDE_BAR_KEY.MY_PROFILE]);
    },
  });
  return { editUserImage };
};

export default usePatchUserImageMutation;

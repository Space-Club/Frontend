import patchUserImage from '@/apis/users/patchUserImage';
import useImageException from '@/hooks/useImageException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY as PROFILE_KEY } from './useMyProfile';
import { QUERY_KEY as SIDE_BAR_KEY } from './useMyProfile';

const usePatchUserImageMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const { handleImageException } = useImageException();

  const { mutate: editUserImage } = useMutation({
    mutationFn: patchUserImage,
    onSuccess: () => {
      createToast({ message: '프로필 사진이 수정되었습니다', toastType: 'success' });
      queryClient.invalidateQueries([PROFILE_KEY.MY_PROFILE]);
      queryClient.invalidateQueries([SIDE_BAR_KEY.MY_PROFILE]);
    },
    onError: (error: AxiosError<HttpException>) => {
      handleImageException(error);
    },
  });
  return { editUserImage };
};

export default usePatchUserImageMutation;

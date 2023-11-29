import deleteProfileImage from '@/apis/users/deleteProfileImage';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useMyProfile';

const useDeleteProfileImage = () => {
  const queryClient = useQueryClient();

  const { mutate: deleteImage } = useMutation({
    mutationFn: deleteProfileImage,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.MY_PROFILE]);
    },
  });

  return { deleteImage };
};

export default useDeleteProfileImage;

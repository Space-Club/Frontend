import editClubSetting from '@/apis/club/editClubSetting';
import useImageException from '@/hooks/useImageException';
import useTextException from '@/hooks/useTextException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY as CLUBS_KEY } from './useClubs';
import { QUERY_KEY as GET_CLUB_KEY } from './useGetClubQuery';

const useEditClubMutation = () => {
  const queryClient = useQueryClient();
  const { handleTextException } = useTextException();
  const { handleImageException } = useImageException();
  const { createToast } = useToast();

  const { mutate: editClub, isLoading } = useMutation({
    mutationFn: editClubSetting,
    onSuccess: () => {
      queryClient.invalidateQueries([GET_CLUB_KEY.GET_CLUB]);
      queryClient.invalidateQueries([CLUBS_KEY.MY_CLUB]);
      createToast({ message: '수정사항이 적용되었습니다', toastType: 'success' });
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
      handleImageException(error);
    },
  });

  return { editClub, isLoading };
};

export default useEditClubMutation;

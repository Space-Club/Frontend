import postClubNotice from '@/apis/club/postClubNotice';
import useTextException from '@/hooks/useTextException';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from './useGetClubNoticeQuery';

interface usePostNoticeMutationProps {
  handleSuccess?: () => void;
}

const usePostNoticeMutation = ({ handleSuccess }: usePostNoticeMutationProps) => {
  const queryClient = useQueryClient();
  const { handleTextException } = useTextException();

  const { mutate: postNotice, isSuccess: postSuccess } = useMutation({
    mutationFn: postClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
      handleSuccess?.();
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
    },
  });

  return { postNotice, postSuccess };
};

export default usePostNoticeMutation;

import postClubNotice from '@/apis/club/postClubNotice';
import useTextException from '@/hooks/useTextException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from './useGetClubNoticeQuery';

interface usePostNoticeMutationProps {
  handleSuccess?: () => void;
}

const usePostNoticeMutation = ({ handleSuccess }: usePostNoticeMutationProps) => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const { handleTextException } = useTextException();

  const { mutate: postNotice, isSuccess: postSuccess } = useMutation({
    mutationFn: postClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
      handleSuccess?.();
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
      createToast({ message: '공지사항 작성에 실패했습니다.', toastType: 'error' });
    },
  });

  return { postNotice, postSuccess };
};

export default usePostNoticeMutation;

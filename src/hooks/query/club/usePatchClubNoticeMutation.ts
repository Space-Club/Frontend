import patchClubNotice from '@/apis/club/patchClubNotice';
import useTextException from '@/hooks/useTextException';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from './useGetClubNoticeQuery';

interface usePatchClubNoticeMutationProps {
  handleSuccess?: () => void;
}

const usePatchClubNoticeMutation = ({ handleSuccess }: usePatchClubNoticeMutationProps) => {
  const queryClient = useQueryClient();
  const { handleTextException } = useTextException();
  const { createToast } = useToast();

  const { data, mutate: patchNotice } = useMutation({
    mutationFn: patchClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
      handleSuccess?.();
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
      createToast({ message: '공지사항 수정에 실패했습니다.', toastType: 'error' });
    },
  });

  return { data, patchNotice };
};

export default usePatchClubNoticeMutation;

import patchClubNotice from '@/apis/club/patchClubNotice';
import useTextException from '@/hooks/useTextException';
import { HttpException } from '@/types/common';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY } from './useGetClubNoticeQuery';

const usePatchClubNoticeMutation = () => {
  const queryClient = useQueryClient();
  const { handleTextException } = useTextException();

  const { data, mutate: patchNotice } = useMutation({
    mutationFn: patchClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
    },
    onError: (error: AxiosError<HttpException>) => {
      handleTextException(error);
    },
  });

  return { data, patchNotice };
};

export default usePatchClubNoticeMutation;

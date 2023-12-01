import postApplyEvent from '@/apis/event/postApplyEvent';
import { EXCEPTION_CODE, EXCEPTION_CODE_MESSAGE } from '@/constants/exceptionCode';
import useToast from '@/hooks/useToast';
import { HttpException } from '@/types/common';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { AxiosError } from 'axios';

import { QUERY_KEY as EVENT_DETAIL_QUERY_KEY } from './useEventDetailQuery';

interface usePostEventApplyMutation {
  eventId: string;
}

const usePostEventApplyMutation = ({ eventId }: usePostEventApplyMutation) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: applyEvent, isLoading: isApplyLoading } = useMutation({
    mutationFn: postApplyEvent,
    onSuccess: async () => {
      await queryClient.invalidateQueries([EVENT_DETAIL_QUERY_KEY.EVENT_DETAIL]);
      createToast({ message: '성공적으로 신청되었습니다.', toastType: 'success' });
      navigate(`/event/${eventId}`);
    },
    onError: (error: AxiosError<HttpException>) => {
      if (error.response?.data.code === EXCEPTION_CODE.EXCEED_CAPACITY) {
        createToast({ message: EXCEPTION_CODE_MESSAGE.EXCEED_CAPACITY, toastType: 'error' });
      } else {
        createToast({ message: '신청에 실패했습니다.', toastType: 'error' });
      }
    },
  });

  return { applyEvent, isApplyLoading };
};

export default usePostEventApplyMutation;

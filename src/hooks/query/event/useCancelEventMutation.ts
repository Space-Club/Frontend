import cancelEvent from '@/apis/event/cancelEvent';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useAppliedEventQuery';

const useCancelEventMutation = () => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: requestCancel } = useMutation({
    mutationFn: cancelEvent,
    onSuccess: ({ eventStatus }) => {
      if (eventStatus === 'CANCELLED') {
        createToast({ message: SUCCESS_MESSAGE.EVENT.CANCELLED, toastType: 'success' });
      } else if (eventStatus === 'CANCEL_REQUESTED') {
        createToast({
          message: SUCCESS_MESSAGE.EVENT.CANCEL_REQUESTED,
          toastType: 'success',
        });
      } else {
        throw new Error('취소 요청 후 이벤트 상태가 CANCEL_REQUESTED 또는 CANCELLED가 아닙니다');
      }

      queryClient.invalidateQueries([QUERY_KEY.APPLIED_EVENT]);
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.EVENT.CANCEL, toastType: 'error' });
    },
  });
  return { requestCancel };
};

export default useCancelEventMutation;

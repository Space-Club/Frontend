import cancelEvent from '@/apis/event/cancelEvent';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import { SUCCESS_MESSAGE } from '@/constants/successMessage';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useAppliedEventQuery';
import { QUERY_KEY as SUBMITTED_FORM_QUERY_KEY } from './useGetSubmittedFormsQuery';

const useCancelEventMutation = () => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: requestCancel } = useMutation({
    mutationFn: cancelEvent,
    onSuccess: ({ participationStatus }) => {
      if (participationStatus === 'CANCELED') {
        createToast({ message: SUCCESS_MESSAGE.EVENT.CANCELED, toastType: 'success' });
      } else if (participationStatus === 'CANCEL_REQUESTED') {
        createToast({
          message: SUCCESS_MESSAGE.EVENT.CANCEL_REQUESTED,
          toastType: 'success',
        });
      } else {
        throw new Error('취소 요청 후 이벤트 상태가 CANCEL_REQUESTED 또는 CANCELED가 아닙니다');
      }

      Promise.all([
        queryClient.invalidateQueries([QUERY_KEY.APPLIED_EVENT]),
        queryClient.invalidateQueries([SUBMITTED_FORM_QUERY_KEY.SUBMITTED_FORMS]),
      ]);
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.EVENT.CANCEL, toastType: 'error' });
    },
  });
  return { requestCancel };
};

export default useCancelEventMutation;

import cancelEvent from '@/apis/event/cancelEvent';
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
        createToast({ message: '이벤트를 성공적으로 취소했습니다', toastType: 'success' });
      } else if (eventStatus === 'CANCEL_REQUESTED') {
        createToast({
          message: '관리자에게 이벤트 취소 요청을 보냈습니다',
          toastType: 'success',
        });
      } else {
        throw new Error('취소 요청 후 이벤트 상태가 CANCEL_REQUESTED 또는 CANCELLED가 아닙니다');
      }

      queryClient.invalidateQueries([QUERY_KEY.APPLIED_EVENT]);
    },
    onError: () => {
      createToast({ message: '서버 에러로 인해 이벤트 취소에 실패했습니다', toastType: 'error' });
    },
  });
  return { requestCancel };
};

export default useCancelEventMutation;

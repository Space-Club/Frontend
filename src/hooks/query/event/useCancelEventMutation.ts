import cancelEvent from '@/apis/event/cancelEvent';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useAppliedEventQuery';

const useCancelEventMutation = () => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: requestCancel } = useMutation({
    mutationFn: cancelEvent,
    onSuccess: () => {
      createToast({ message: '이벤트를 성공적으로 취소했습니다', toastType: 'success' });
      queryClient.invalidateQueries([QUERY_KEY.APPLIED_EVENT]);
    },
    onError: () => {
      createToast({ message: '서버 에러로 인해 이벤트 취소에 실패했습니다', toastType: 'error' });
    },
  });
  return { requestCancel };
};

export default useCancelEventMutation;

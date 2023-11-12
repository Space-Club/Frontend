import cancelEvent from '@/apis/event/cancelEvent';
import useToast from '@/hooks/useToast';

import { useMutation } from '@tanstack/react-query';

const useCancelEventMutation = () => {
  const { createToast } = useToast();

  const { mutate } = useMutation({
    mutationFn: cancelEvent,
    onSuccess: () => {
      createToast({ message: '이벤트를 성공적으로 취소했습니다', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '서버 에러로 인해 이벤트 취소에 실패했습니다', toastType: 'error' });
    },
  });
  return { mutate };
};

export default useCancelEventMutation;

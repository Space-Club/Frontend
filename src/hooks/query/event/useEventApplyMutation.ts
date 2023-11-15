import postApplyEvent from '@/apis/event/postApplyEvent';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useEventApplyMutation = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: applyEvent, isLoading: isApplyLoading } = useMutation({
    mutationFn: postApplyEvent,
    onSuccess: () => {
      createToast({ message: '성공적으로 신청되었습니다.', toastType: 'success' });
      navigate(-1);
    },
  });

  return { applyEvent, isApplyLoading };
};

export default useEventApplyMutation;

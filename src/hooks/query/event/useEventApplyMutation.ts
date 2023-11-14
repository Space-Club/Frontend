import postApplyEvent from '@/apis/event/postApplyEvent';
<<<<<<< HEAD
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';
=======
>>>>>>> 14e8093 (feat: 폼 제출 api 모킹 및 api 최종 구현 완료)

import { useMutation } from '@tanstack/react-query';

const useEventApplyMutation = () => {
<<<<<<< HEAD
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: applyEvent, isLoading: isApplyLoading } = useMutation({
    mutationFn: postApplyEvent,
    onSuccess: () => {
      createToast({ message: '성공적으로 신청되었습니다.', toastType: 'success' });
      navigate(-1);
    },
=======
  const { mutate: applyEvent } = useMutation({
    mutationFn: postApplyEvent,
>>>>>>> 14e8093 (feat: 폼 제출 api 모킹 및 api 최종 구현 완료)
  });

  return { applyEvent, isApplyLoading };
};

export default useEventApplyMutation;

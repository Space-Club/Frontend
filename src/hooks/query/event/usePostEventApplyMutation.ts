import postApplyEvent from '@/apis/event/postApplyEvent';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

interface usePostEventApplyMutation {
  eventId: string;
}

const usePostEventApplyMutation = ({ eventId }: usePostEventApplyMutation) => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: applyEvent, isLoading: isApplyLoading } = useMutation({
    mutationFn: postApplyEvent,
    onSuccess: () => {
      createToast({ message: '성공적으로 신청되었습니다.', toastType: 'success' });
      navigate(`/event/${eventId}`);
    },
    onError: () => {
      createToast({ message: '신청에 실패했습니다.', toastType: 'error' });
    },
  });

  return { applyEvent, isApplyLoading };
};

export default usePostEventApplyMutation;

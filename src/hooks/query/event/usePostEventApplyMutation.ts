import postEventApply from '@/apis/event/postEventApply';

import { useMutation } from '@tanstack/react-query';

const usePostEventApplyMutation = () => {
  const { mutate: applyEvent } = useMutation({
    mutationFn: postEventApply,
    onSuccess: () => {}, //TODO: 신청 완료되었습니다 toast 띄우기
    onError: () => {}, //TODO: 에러 발생했습니다 toast 띄우기
    retry: 2,
  });

  return { applyEvent };
};

export default usePostEventApplyMutation;

import postEventApply from '@/apis/event/postEventApply';

import { useMutation } from '@tanstack/react-query';

const usePostEventApplyMutation = () => {
  const { mutate: applyEvent } = useMutation({
    mutationFn: postEventApply,
    onSuccess: () => {},
    onError: () => {},
  });

  return { applyEvent };
};

export default usePostEventApplyMutation;

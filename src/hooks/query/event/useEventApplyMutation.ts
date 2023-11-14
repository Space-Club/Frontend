import postEventApply from '@/apis/event/postEventApply';

import { useMutation } from '@tanstack/react-query';

const useEventApplyMutation = () => {
  const { mutate: applyEvent } = useMutation({
    mutationFn: postEventApply,
  });

  return { applyEvent };
};

export default useEventApplyMutation;

import postApplyEvent from '@/apis/event/postApplyEvent';

import { useMutation } from '@tanstack/react-query';

const useEventApplyMutation = () => {
  const { mutate: applyEvent } = useMutation({
    mutationFn: postApplyEvent,
  });

  return { applyEvent };
};

export default useEventApplyMutation;

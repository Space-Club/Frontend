import deleteEvent from '@/apis/event/deleteEvent';
import useToast from '@/hooks/useToast';

import { useMutation } from '@tanstack/react-query';

interface useDeleteEventMutation {
  eventId: string;
}

const useDeleteEventMutation = ({ eventId }: useDeleteEventMutation) => {
  const { createToast } = useToast();
  const { mutate: deleteEventMutate } = useMutation({
    mutationKey: ['delete_event', `${eventId}`],
    mutationFn: () => deleteEvent({ eventId }),
    onSuccess: () => {
      createToast({ message: '행사가 성공적으로 삭제되었습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '행사 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deleteEventMutate };
};

export default useDeleteEventMutation;

import deleteEvent from '@/apis/event/deleteEvent';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as GET_ALL_EVENT_QUERY_KEY } from './useAllEventsQuery';

interface useDeleteEventMutation {
  eventId: string;
}

const useDeleteEventMutation = ({ eventId }: useDeleteEventMutation) => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const { mutate: deleteEventMutate } = useMutation({
    mutationKey: ['delete_event', `${eventId}`],
    mutationFn: () => deleteEvent({ eventId }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [GET_ALL_EVENT_QUERY_KEY] });
      navigate('/');
      createToast({ message: '행사가 성공적으로 삭제되었습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '행사 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deleteEventMutate };
};

export default useDeleteEventMutation;

import deleteEvent from '@/apis/event/deleteEvent';

import { useMutation } from '@tanstack/react-query';

interface useDeleteEventMutation {
  eventId: string;
}

const useDeleteEventMutation = ({ eventId }: useDeleteEventMutation) => {
  const { mutate: deleteEventMutate } = useMutation(['delete_event', `${eventId}`], () =>
    deleteEvent({ eventId }),
  );

  return { deleteEventMutate };
};

export default useDeleteEventMutation;

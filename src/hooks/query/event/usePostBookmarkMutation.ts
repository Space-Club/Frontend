import postEventBookmark from '@/apis/event/postEventBookmark';

import { useMutation } from '@tanstack/react-query';

interface usePostBookmarkMutation {
  eventId: string;
}

const usePostBookmarkMutation = ({ eventId }: usePostBookmarkMutation) => {
  const { mutate: postBookmarkMutate } = useMutation(['bookmark', `${eventId}`], () =>
    postEventBookmark({ eventId }),
  );

  return { postBookmarkMutate };
};

export default usePostBookmarkMutation;

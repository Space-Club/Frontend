import patchEventBookmark from '@/apis/event/patchEventBookmark';
import useToast from '@/hooks/useToast';

import { useMutation } from '@tanstack/react-query';

interface UsePatchBookmarkMutation {
  bookmarkPaint: boolean;
}

const usePatchBookmarkMutation = ({ bookmarkPaint }: UsePatchBookmarkMutation) => {
  const { createToast } = useToast();
  const { mutate: patchBookmarkMutate, isLoading: isBookmarkLoading } = useMutation({
    mutationFn: patchEventBookmark,
    onSuccess: () => {
      if (!bookmarkPaint) createToast({ message: '행사를 북마크했습니다.', toastType: 'info' });
      else createToast({ message: '행사 북마크를 취소하셨습니다.', toastType: 'info' });
    },
  });

  return { patchBookmarkMutate, isBookmarkLoading };
};

export default usePatchBookmarkMutation;

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
      if (bookmarkPaint) createToast({ message: '행사를 북마크했습니다.', toastType: 'info' });
      else createToast({ message: '행사 북마크를 취소했습니다.', toastType: 'info' });
    },
    onError: () => {
      if (bookmarkPaint)
        createToast({ message: '행사를 북마크에 실패했습니다.', toastType: 'error' });
      else createToast({ message: '행사 북마크 취소에 실패했습니다.', toastType: 'error' });
    },
  });

  return { patchBookmarkMutate, isBookmarkLoading };
};

export default usePatchBookmarkMutation;

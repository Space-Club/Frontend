import patchEventBookmark from '@/apis/event/patchEventBookmark';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY as GET_EVENT_BOOKMARKS_QUERY_KEY } from './useGetEventBookMarkQuery';
import { QUERY_KEY as GET_IS_BOOKMARK_QUERY_KEY } from './useIsBookmarkQuery';

interface UsePatchBookmarkMutation {
  bookmarkPaint: boolean;
}

const usePatchBookmarkMutation = ({ bookmarkPaint }: UsePatchBookmarkMutation) => {
  const { createToast } = useToast();
  const queryClient = useQueryClient();
  const { mutate: patchBookmarkMutate, isLoading: isBookmarkLoading } = useMutation({
    mutationFn: patchEventBookmark,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: [GET_IS_BOOKMARK_QUERY_KEY, GET_EVENT_BOOKMARKS_QUERY_KEY],
      });
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

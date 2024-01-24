import deleteClubComment from '@/apis/club/deleteClubComment';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubCommentsQuery';

const useDeleteClubCommentMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: deleteComment } = useMutation(deleteClubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_COMMENTS]);
      createToast({ message: '댓글이 삭제되었습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '댓글 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deleteComment };
};

export default useDeleteClubCommentMutation;

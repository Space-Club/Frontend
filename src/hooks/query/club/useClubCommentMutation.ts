import postClubComment from '@/apis/club/postClubComment';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubCommentsQuery';

const useClubCommentMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: postComment } = useMutation(postClubComment, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_COMMENTS]);
      createToast({ message: '댓글 작성이 완료되었습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '댓글 작성에 실패했습니다.', toastType: 'error' });
    },
  });

  return { postComment };
};

export default useClubCommentMutation;

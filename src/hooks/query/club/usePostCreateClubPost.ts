import postCreateClubPost from '@/apis/club/postCreateClubPost';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubPostsQuery';

const usePostCreateClubPost = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: createPost } = useMutation(postCreateClubPost, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_POSTS]);
      createToast({ message: '작성 완료되었습니다.', toastType: 'success' });
    },
    onError: () => {
      createToast({ message: '글 작성 실패', toastType: 'error' });
    },
  });

  return { createPost };
};

export default usePostCreateClubPost;

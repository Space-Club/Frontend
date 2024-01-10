import postCreateClubPost from '@/apis/club/postCreateClubPost';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubPostsQuery';

const usePostCreateClubPost = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: createPost } = useMutation(postCreateClubPost, {
    onSuccess: (data: string) => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_POSTS]);
      createToast({ message: '작성 완료되었습니다.', toastType: 'success' });
      const [, , , , , clubId, postId] = data.split('/');
      navigate(PATH.CLUB.POST(clubId, postId));
    },
    onError: () => {
      createToast({ message: '글 작성 실패', toastType: 'error' });
    },
  });

  return { createPost };
};

export default usePostCreateClubPost;

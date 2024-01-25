import deleteClubPost from '@/apis/club/deleteClubPost';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubPostsQuery';

const useDeleteClubPostMutation = () => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();
  const navigate = useNavigate();

  const { mutate: deletePost } = useMutation(deleteClubPost, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_POSTS]);
      createToast({ message: '게시물이 삭제되었습니다.', toastType: 'success' });
      navigate(-1);
    },
    onError: () => {
      createToast({ message: '게시물 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deletePost };
};

export default useDeleteClubPostMutation;

import putClubPost from '@/apis/club/putClubPost';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubPostDetail';

interface usePutClubPostMutationProps {
  clubId: string;
  postId: string | null;
}

const usePutClubPostMutation = ({ clubId, postId }: usePutClubPostMutationProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: putPost } = useMutation(putClubPost, {
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.GET_CLUB_POST_DETAIL]);
      createToast({ message: '수정이 완료되었습니다.', toastType: 'success' });
      if (postId) {
        navigate(PATH.CLUB.POST(clubId, postId));
      }
    },
    onError: () => {
      createToast({ message: '수정에 실패했습니다.', toastType: 'error' });
    },
  });

  return { putPost };
};

export default usePutClubPostMutation;

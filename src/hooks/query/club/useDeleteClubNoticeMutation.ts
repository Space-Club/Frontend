import deleteClubNotice from '@/apis/club/deleteClubNotice';
import useToast from '@/hooks/useToast';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useGetClubNoticeQuery';

interface useDeleteClubNoticeMutationProps {
  handleSuccess?: () => void;
}

const useDeleteClubNoticeMutation = ({ handleSuccess }: useDeleteClubNoticeMutationProps) => {
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const { mutate: deleteNotice } = useMutation({
    mutationFn: deleteClubNotice,
    onSuccess: () => {
      queryClient.invalidateQueries([QUERY_KEY.CLUB_NOTICE]);
      handleSuccess?.();
    },
    onError: () => {
      createToast({ message: '공지사항 삭제에 실패했습니다.', toastType: 'error' });
    },
  });
  return { deleteNotice };
};

export default useDeleteClubNoticeMutation;

import deleteClub from '@/apis/club/deleteClub';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation, useQueryClient } from '@tanstack/react-query';

import { QUERY_KEY } from './useClubs';

interface useDeleteClubMutation {
  clubId: string;
}

const useDeleteClubMutation = ({ clubId }: useDeleteClubMutation) => {
  const navigate = useNavigate();
  const { createToast } = useToast();
  const queryClient = useQueryClient();

  const { mutate: deleteClubMutate } = useMutation({
    mutationKey: ['delete_club', `${clubId}`],
    mutationFn: () => deleteClub({ clubId }),
    onSuccess: () => {
      createToast({ message: '클럽이 성공적으로 삭제되었습니다.', toastType: 'success' });
      queryClient.invalidateQueries([QUERY_KEY.MY_CLUB]);
      navigate('/');
    },
    onError: () => {
      createToast({ message: '클럽 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deleteClubMutate };
};

export default useDeleteClubMutation;

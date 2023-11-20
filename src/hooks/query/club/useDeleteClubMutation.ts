import deleteClub from '@/apis/club/deleteClub';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

interface useDeleteClubMutation {
  clubId: string;
}

const useDeleteClubMutation = ({ clubId }: useDeleteClubMutation) => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: deleteClubMutate } = useMutation({
    mutationKey: ['delete_club', `${clubId}`],
    mutationFn: () => deleteClub({ clubId }),
    onSuccess: () => {
      createToast({ message: '클럽이 성공적으로 삭제되었습니다.', toastType: 'success' });
      navigate('/');
    },
    onError: () => {
      createToast({ message: '클럽 삭제에 실패했습니다.', toastType: 'error' });
    },
  });

  return { deleteClubMutate };
};

export default useDeleteClubMutation;

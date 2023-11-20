import deleteUser from '@/apis/users/deleteUser';
import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useDeleteUserMutation = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  const { mutate: withdrawService } = useMutation({
    mutationFn: deleteUser,
    onSuccess: () => {
      createToast({ message: '회원탈퇴가 완료되었습니다.', toastType: 'success' });
      navigate(PATH.LOGIN);
    },
  });

  return { withdrawService };
};

export default useDeleteUserMutation;

import postLogout from '@/apis/users/postLogout';
import { PATH } from '@/constants/path';
import { deleteStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const usePostLogoutMutation = () => {
  const navigate = useNavigate();

  const { mutate: logout } = useMutation({
    mutationFn: postLogout,
    onSuccess: () => {
      deleteStorage('token');
      navigate(PATH.MAIN);
    },
  });

  return { logout };
};

export default usePostLogoutMutation;

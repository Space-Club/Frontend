import { PATH } from '@/constants/path';
import { deleteStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const logOut = () => {
    queryClient.clear();
    deleteStorage('token');
    deleteStorage('refreshToken');
    navigate(PATH.MAIN);
  };

  return { logOut };
};

export default useLogout;

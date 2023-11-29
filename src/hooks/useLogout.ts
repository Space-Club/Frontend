import { PATH } from '@/constants/path';
import { deleteStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useQueryClient } from '@tanstack/react-query';

import useToast from './useToast';

const useLogout = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { createToast } = useToast();

  const logOut = () => {
    queryClient.clear();
    createToast({ message: '로그아웃 되었습니다', toastType: 'success' });
    deleteStorage('token');
    deleteStorage('refreshToken');
    navigate(PATH.MAIN);
  };

  return { logOut };
};

export default useLogout;

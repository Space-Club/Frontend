import postUser from '@/apis/users/postUser';
import { ERROR_MESSAGE } from '@/constants/errorMessage';
import useToast from '@/hooks/useToast';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const usePostUser = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();
  const { mutate: registerUser } = useMutation(postUser, {
    onSuccess: () => {
      createToast({ message: '가입이 완료되었습니다.', toastType: 'success' });

      const returnPage = localStorage.getItem('returnpage');
      if (returnPage) {
        navigate(returnPage);
        localStorage.removeItem('returnpage');
      } else {
        navigate('/');
      }
    },
    onError: () => {
      createToast({ message: ERROR_MESSAGE.REGISTER.FAILED, toastType: 'error' });
    },
  });

  return { registerUser };
};

export default usePostUser;

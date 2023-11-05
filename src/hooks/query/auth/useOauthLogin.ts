import { oauthLogin } from '@/apis/auth/oauthLogin';
import { PATH } from '@/constants/path';
import { OauthLoginRequest } from '@/types/auth';
import { setStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useOauthLogin = ({ code }: OauthLoginRequest) => {
  const navigate = useNavigate();
  const { mutate: login } = useMutation({
    mutationFn: () => oauthLogin({ code }),
    onSuccess: ({ data }) => {
      if (data.token === '') {
        setStorage('userId', data.userId);
        navigate(PATH.REGISTER);
      } else {
        setStorage('token', data.token);
        navigate(PATH.MAIN);
      }
    },
    onError: () => {
      //TODO: Toast 띄우기
      navigate(PATH.LOGIN);
      throw new Error('로그인에 실패했습니다');
    },
  });
  return {
    login,
  };
};

export default useOauthLogin;

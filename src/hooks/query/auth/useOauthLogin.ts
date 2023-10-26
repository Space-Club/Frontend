import { oauthLogin } from '@/apis/auth/oauthLogin';
import { OauthLoginRequest } from '@/constants/auth';
import { PATH } from '@/constants/path';
import { setStorage } from '@/utils/localStorage';

import { useNavigate } from 'react-router-dom';

import { useMutation } from '@tanstack/react-query';

const useOauthLogin = ({ code }: OauthLoginRequest) => {
  const navigate = useNavigate();
  const { mutate: login } = useMutation({
    mutationFn: () => oauthLogin({ code }),
    onSuccess: ({ data }) => {
      setStorage('token', data.token);
      if (data.isNewMember) {
        navigate(PATH.REGISTER);
      } else {
        navigate(PATH.MAIN);
      }
    },
    onError: () => {
      //TODO: Toast 띄우기
      navigate(PATH.LOGIN);
      throw new Error('로그인 중 서버에서 오류가 발생했습니다');
    },
  });
  return {
    login,
  };
};

export default useOauthLogin;

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
      setStorage('token', data.token);
      if (data.isNewMember) {
        navigate(PATH.REGISTER);
      } else {
        navigate(PATH.MAIN);
      }
    },
    onError: ({ data }) => {
      //TODO: Toast 띄우기
      navigate(PATH.LOGIN);
      throw new Error(data.message);
    },
  });
  return {
    login,
  };
};

export default useOauthLogin;

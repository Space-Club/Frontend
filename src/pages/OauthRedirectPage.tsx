import { kakaoLogin } from '@/apis/auth/kakaoLogin';
import { PATH } from '@/constants/path';
import { setStorage } from '@/utils/localStorage';

import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const OauthRedirectPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const requestKakaoLogin = async () => {
      try {
        const authCode = new URL(window.location.href).searchParams.get('code');
        if (!authCode) {
          throw new Error('인증 코드가 없습니다.');
        }

        const { token, isNewUser } = await kakaoLogin(authCode);
        setStorage('token', token);

        if (isNewUser) {
          navigate(PATH.REGISTER);
        } else {
          navigate(PATH.MAIN);
        }
      } catch (error) {
        //TODO: 에러 처리 navigate('/error');
      }
    };

    requestKakaoLogin();
  }, [navigate]);

  return <div>OauthRedirectPage</div>;
};

export default OauthRedirectPage;

import { kakaoLogin } from '@/apis/auth/kakaoLogin';

import { useEffect } from 'react';

const OauthRedirectPage = () => {
  const authCode = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {
    if (!authCode) {
      throw new Error('인증 코드가 없습니다.');
    }

    kakaoLogin(authCode).then(({ accessToken }) => {
      localStorage.setItem('accessToken', accessToken);
      window.location.href = '/';
    });
  });

  return <div>OauthRedirectPage</div>;
};

export default OauthRedirectPage;

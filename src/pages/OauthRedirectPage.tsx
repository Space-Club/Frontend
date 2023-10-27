import useOauthLogin from '@/hooks/query/auth/useOauthLogin';

import { useEffect } from 'react';

const OauthRedirectPage = () => {
  const code = new URLSearchParams(window.location.search).get('code') ?? '';

  if (!code) {
    //TODO: 에러페이지로 이동시켜주기
    throw new Error('code is not exist');
  }

  const { login } = useOauthLogin({ code });

  useEffect(() => {
    login();
  }, [code, login]);

  return <div>OauthRedirectPage</div>;
};

export default OauthRedirectPage;

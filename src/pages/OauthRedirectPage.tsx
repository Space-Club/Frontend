import useOauthLogin from '@/hooks/query/auth/useOauthLogin';

import { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

const OauthRedirectPage = () => {
  const [searchParams] = useSearchParams();

  const code = searchParams.get('code');

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

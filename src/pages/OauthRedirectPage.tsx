import { useEffect } from 'react';

const OauthRedirectPage = () => {
  const authCode = new URL(window.location.href).searchParams.get('code');

  useEffect(() => {}, []);

  return <div>OauthRedirectPage</div>;
};

export default OauthRedirectPage;

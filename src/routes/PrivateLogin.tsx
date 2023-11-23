import { PATH } from '@/constants/path';
import useToast from '@/hooks/useToast';
import { getStorage } from '@/utils/localStorage';

import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

const PrivateLogin = () => {
  const navigate = useNavigate();
  const { createToast } = useToast();

  useEffect(() => {
    const token = getStorage('token');

    if (!token) {
      navigate(PATH.LOGIN, { replace: true });
      createToast({ message: '로그인이 필요한 서비스입니다.', toastType: 'error' });
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Outlet />
    </>
  );
};

export default PrivateLogin;

import { PATH } from '@/constants/path';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import useToast from '@/hooks/useToast';

import { PropsWithChildren } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const PrivateManager = ({ children }: PropsWithChildren) => {
  const { clubId } = useParams();
  const { createToast } = useToast();
  const navigate = useNavigate();

  if (!clubId) throw new Error('클럽 ID를 URL에서 가져올 수 없습니다.');

  const { role } = useMemberAuth({ clubId });

  if (!role) return null;

  if (role !== 'MANAGER') {
    createToast({ message: '클럽의 관리자만 접근 가능합니다.', toastType: 'error' });
    navigate(PATH.MAIN);
  }

  return (
    <>
      <Outlet />
      {role && children}
    </>
  );
};

export default PrivateManager;

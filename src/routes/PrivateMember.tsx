import { ERROR_CODE } from '@/constants/error';
import { PATH } from '@/constants/path';
import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import useToast from '@/hooks/useToast';

import { PropsWithChildren } from 'react';
import { Outlet, useNavigate, useParams } from 'react-router-dom';

const PrivateMember = ({ children }: PropsWithChildren) => {
  const { clubId } = useParams();
  const { createToast } = useToast();
  const navigate = useNavigate();

  if (!clubId) throw new Error('클럽 ID를 URL에서 가져올 수 없습니다.');

  const { role, isError, errorCode } = useMemberAuth({ clubId });
  if (isError && errorCode === ERROR_CODE.NOT_CLUB_MEMBER) {
    createToast({ message: '클럽의 멤버만 접근 가능합니다.', toastType: 'error' });
    navigate(PATH.MAIN);
  }

  return (
    <>
      <Outlet />
      {role && children}
    </>
  );
};

export default PrivateMember;

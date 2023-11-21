import useMemberAuth from '@/hooks/query/club/useMemberAuth';
import useWithdrawClubMutation from '@/hooks/query/club/useWithdrawClubMutation';
import useModal from '@/hooks/useModal';

import AlertModal from '../Modals/AlertModal';
import ConfirmModal from '../Modals/ConfirmModal';
import { LeaveClubButtonStyled } from './LeaveClubButton.style';

interface LeaveClubButtonProps {
  clubId: string;
}

const LeaveClubButton = ({ clubId }: LeaveClubButtonProps) => {
  const { data } = useMemberAuth({ clubId });
  const { withdrawClubMutate } = useWithdrawClubMutation();
  const { showModal, modalOpen, modalClose } = useModal();
  if (!data) {
    return null;
  }
  const isManager = data.role === 'MANAGER';
  console.log(isManager);

  return (
    <>
      {showModal &&
        (isManager ? (
          <AlertModal
            message="클럽의 관리자는 탈퇴할 수 없습니다. 권한을 멤버로 바꿔주세요!"
            onClose={modalClose}
          />
        ) : (
          <ConfirmModal
            message="클럽을 탈퇴하시겠습니까?"
            confirmLabel="탈퇴"
            onConfirm={() => withdrawClubMutate({ clubId })}
            onClose={modalClose}
          />
        ))}
      <LeaveClubButtonStyled onClick={modalOpen}>탈퇴하기</LeaveClubButtonStyled>
    </>
  );
};

export default LeaveClubButton;

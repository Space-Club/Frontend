import useWithdrawClubMutation from '@/hooks/query/club/useWithdrawClubMutation';
import useModal from '@/hooks/useModal';

import ConfirmModal from '../Modals/ConfirmModal';
import { LeaveClubButtonStyled } from './LeaveClubButton.style';

interface LeaveClubButtonProps {
  clubId: string;
}

const LeaveClubButton = ({ clubId }: LeaveClubButtonProps) => {
  const { withdrawClubMutate } = useWithdrawClubMutation();
  const { showModal, modalOpen, modalClose } = useModal();

  return (
    <>
      {showModal && (
        <ConfirmModal
          message="클럽을 탈퇴하시겠습니까?"
          confirmLabel="탈퇴"
          onConfirm={() => withdrawClubMutate({ clubId })}
          onClose={modalClose}
        />
      )}
      <LeaveClubButtonStyled onClick={modalOpen}>탈퇴하기</LeaveClubButtonStyled>
    </>
  );
};

export default LeaveClubButton;

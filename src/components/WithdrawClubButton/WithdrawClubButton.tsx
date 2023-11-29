import useWithdrawClubMutation from '@/hooks/query/club/useWithdrawClubMutation';
import useModal from '@/hooks/useModal';

import ConfirmModal from '../Modals/ConfirmModal';
import { WithdrawClubButtonStyled } from './WithdrawClubButton.style';

interface WithdrawClubButtonProps {
  clubId: string;
}

const WithdrawClubButton = ({ clubId }: WithdrawClubButtonProps) => {
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
      <WithdrawClubButtonStyled onClick={modalOpen}>클럽 탈퇴</WithdrawClubButtonStyled>
    </>
  );
};

export default WithdrawClubButton;

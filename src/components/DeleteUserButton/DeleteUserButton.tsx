import useDeleteUserMutation from '@/hooks/query/user/useDeleteUserMutation';
import useModal from '@/hooks/useModal';

import ConfirmModal from '../Modals/ConfirmModal';
import { DeleteUserButtonStyled } from './DeleteUserButton.style';

const DeleteUserButton = () => {
  const { withdrawService } = useDeleteUserMutation();
  const { modalClose, modalOpen, showModal } = useModal();

  const handleWithdrawConfirm = () => {
    withdrawService();
    modalClose();
  };

  return (
    <>
      {showModal && <ConfirmModal onClose={modalClose} onConfirm={handleWithdrawConfirm} />}
      <DeleteUserButtonStyled onClick={() => modalOpen()}>탈퇴하기</DeleteUserButtonStyled>
    </>
  );
};

export default DeleteUserButton;

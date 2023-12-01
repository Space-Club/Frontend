import { MODAL_TEXT } from '@/constants/modalMessage';
import useDeleteMemberMutation from '@/hooks/query/club/useDeleteMemberMutation';
import useModal from '@/hooks/useModal';

import ConfirmModal from '../Modals/ConfirmModal';
import { DeleteMemberButtonStyled } from './DeleteMemberButton.style';

interface DeleteMemberButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  memberId: string;
  clubId: string;
}

const DeleteMemberButton = ({ memberId, clubId, children, ...props }: DeleteMemberButtonProps) => {
  const { withdrawMember } = useDeleteMemberMutation();
  const { showModal, modalOpen, modalClose } = useModal();
  return (
    <>
      {showModal && (
        <ConfirmModal
          message={MODAL_TEXT.DELETE_MEMBER}
          confirmLabel="확인"
          onConfirm={() => withdrawMember({ memberId, clubId })}
          onClose={modalClose}
        />
      )}
      <DeleteMemberButtonStyled onClick={modalOpen} {...props}>
        내보내기
        {children}
      </DeleteMemberButtonStyled>
    </>
  );
};

export default DeleteMemberButton;

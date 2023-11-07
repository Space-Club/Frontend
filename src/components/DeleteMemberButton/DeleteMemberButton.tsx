import useDeleteMemberMutation from '@/hooks/query/user/useDeleteMemberMutation';
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
          message="정말 이 멤버를 탈퇴시키시겠어요?"
          confirmLabel="탈퇴"
          onConfirm={() => withdrawMember({ memberId, clubId })}
          onClose={modalClose}
        />
      )}
      <DeleteMemberButtonStyled onClick={modalOpen} {...props}>
        탈퇴{children}
      </DeleteMemberButtonStyled>
    </>
  );
};

export default DeleteMemberButton;

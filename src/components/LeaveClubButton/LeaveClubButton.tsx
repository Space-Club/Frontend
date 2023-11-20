import useMemberAuth from '@/hooks/query/club/useMemberAuth';

// import useDeleteMemberMutation from '@/hooks/query/user/useDeleteMemberMutation';
// import useModal from '@/hooks/useModal';
// import AlertModal from '../Modals/AlertModal';
// import ConfirmModal from '../Modals/ConfirmModal';
import { LeaveClubButtonStyled } from './LeaveClubButton.style';

interface LeaveClubButtonProps {
  clubId: string;
}

const LeaveClubButton = ({ clubId }: LeaveClubButtonProps) => {
  const { data } = useMemberAuth({ clubId });
  //   const { withdrawMember } = useDeleteMemberMutation();
  //   const { showModal, modalOpen, modalClose } = useModal();
  if (!data) {
    return null;
  }
  const isManager = data.role === 'MANAGER';
  console.log(isManager);

  return (
    <>
      {/* {showModal &&
        (isManager ? (
          <AlertModal
            message="클럽의 관리자는 탈퇴할 수 없습니다. 권한을 멤버로 바꿔주세요!"
            onClose={modalClose}
          />
        ) : (
          <ConfirmModal
            message="클럽을 탈퇴하시겠습니까?"
            confirmLabel="탈퇴"
            onConfirm={withdrawMember({ memberId, clubId })}
            onClose={modalClose}
          />
        ))} */}
      <LeaveClubButtonStyled>탈퇴하기</LeaveClubButtonStyled>
    </>
  );
};

export default LeaveClubButton;

import useDeleteMemberMutation from '@/hooks/query/user/useDeleteMemberMutation';

import { DeleteMemberButtonStyled } from './DeleteMemberButton.style';

interface DeleteMemberButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  memberId: string;
  clubId: string;
}

const DeleteMemberButton = ({ memberId, clubId, children, ...props }: DeleteMemberButtonProps) => {
  const { withdrawMember } = useDeleteMemberMutation();

  //TODO: 탈퇴 버튼 클릭 시, confirm 모달 띄우기
  return (
    <DeleteMemberButtonStyled onClick={() => withdrawMember({ memberId, clubId })} {...props}>
      탈퇴{children}
    </DeleteMemberButtonStyled>
  );
};

export default DeleteMemberButton;

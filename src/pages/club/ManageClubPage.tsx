import InviteLink from '@/components/InviteLink/InviteLink';
import DropDown from '@/components/common/DropDown/DropDown';
import { MEMBER_ROLE_DROPDOWN_OPTIONS } from '@/constants/user';
import usePatchMemberRoleMutation from '@/hooks/query/user/usePatchMemberRoleMutation';
import { MemberRole } from '@/types/user';

import { useLocation } from 'react-router-dom';

const ManageClubPage = () => {
  const { pathname } = useLocation();
  const { changeMemberRole } = usePatchMemberRoleMutation();

  const clubId = pathname.split('/').pop();

  if (!clubId) {
    throw new Error('path에서 clubId를 가져올 수 없습니다.');
  }

  return (
    <>
      <DropDown
        options={MEMBER_ROLE_DROPDOWN_OPTIONS}
        selectedValue={MEMBER_ROLE_DROPDOWN_OPTIONS[0].value ?? ''} //TODO 실제 멤버 ROLE 값으로 변경
        onChange={(event) => {
          changeMemberRole({ memberId: '1', clubId, role: event.target.value as MemberRole }); //TODO 실제 멤버 ID로 변경
        }}
      />
      <InviteLink />;
    </>
  );
};

export default ManageClubPage;

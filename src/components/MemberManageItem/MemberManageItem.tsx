import { MEMBER_ROLE_DROPDOWN_OPTIONS } from '@/constants/user';
import usePatchMemberRoleMutation from '@/hooks/query/user/usePatchMemberRoleMutation';
import { MemberRole } from '@/types/user';

import DeleteMemberButton from '../DeleteMemberButton/DeleteMemberButton';
import Avatar from '../common/Avatar/Avatar';
import DropDown from '../common/DropDown/DropDown';
import {
  MemberManageItemButtonWrapper,
  MemberManageItemContainer,
  MemberManageItemNameWrapper,
} from './MemberManageItem.style';

interface MemberManageItemProps {
  clubId: string;
  memberId: string;
  name: string;
  role: MemberRole;
  profileImageSrc?: string;
}

const MemberManageItem = ({
  clubId,
  memberId,
  name,
  role,
  profileImageSrc,
}: MemberManageItemProps) => {
  const { changeMemberRole } = usePatchMemberRoleMutation();
  return (
    <MemberManageItemContainer>
      <Avatar avatarSize="normal" profileImageSrc={profileImageSrc} />
      <MemberManageItemNameWrapper>{name}</MemberManageItemNameWrapper>
      <MemberManageItemButtonWrapper>
        <DropDown
          options={MEMBER_ROLE_DROPDOWN_OPTIONS}
          selectedValue={role}
          onChange={(event) => {
            changeMemberRole({ memberId, clubId, role: event.target.value as MemberRole });
          }}
        />
        <DeleteMemberButton clubId={clubId} memberId={memberId} />
      </MemberManageItemButtonWrapper>
    </MemberManageItemContainer>
  );
};

export default MemberManageItem;

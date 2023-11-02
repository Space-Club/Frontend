import DeleteMemberButton from '../DeleteMemberButton/DeleteMemberButton';
import Avatar from '../common/Avatar/Avatar';
import {
  MemberManageItemButtonWrapper,
  MemberManageItemContainer,
  MemberManageItemNameWrapper,
} from './MemberManageItem.style';

interface MemberManageItemProps {
  clubId: string;
  memberId: string;
  name: string;
  profileImageSrc?: string;
}

const MemberManageItem = ({ clubId, memberId, name, profileImageSrc }: MemberManageItemProps) => {
  return (
    <MemberManageItemContainer>
      <Avatar avatarSize="normal" profileImageSrc={profileImageSrc} />
      <MemberManageItemNameWrapper>{name}</MemberManageItemNameWrapper>
      <MemberManageItemButtonWrapper>
        <DeleteMemberButton clubId={clubId} memberId={memberId} />
      </MemberManageItemButtonWrapper>
    </MemberManageItemContainer>
  );
};

export default MemberManageItem;

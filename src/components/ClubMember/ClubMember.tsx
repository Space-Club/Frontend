import useClubMembersQuery from '@/hooks/query/club/useClubMembersQuery';

import Avatar from '../common/Avatar/Avatar';
import { ClubMemberAvatarWrapper, ClubMemberContainer } from './ClubMember.style';

interface ClubMemberProps {
  clubId: string;
}

const ClubMember = ({ clubId }: ClubMemberProps) => {
  const { clubMembers } = useClubMembersQuery({ clubId });

  if (!clubMembers) return null;

  return (
    <ClubMemberContainer>
      {clubMembers.map((clubMember) => (
        <ClubMemberAvatarWrapper key={clubMember.id}>
          <Avatar avatarSize="normal" profileImageSrc={clubMember.profileImageUrl} />
        </ClubMemberAvatarWrapper>
      ))}
    </ClubMemberContainer>
  );
};

export default ClubMember;

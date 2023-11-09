import useClubMembersQuery from '@/hooks/query/club/useClubMembersQuery';

import Avatar from '../common/Avatar/Avatar';
import { ClubMemberContainer } from './ClubMember.style';

interface ClubMemberProps {
  clubId: string;
}

const ClubMember = ({ clubId }: ClubMemberProps) => {
  const { clubMembers } = useClubMembersQuery({ clubId });

  return (
    <ClubMemberContainer>
      {clubMembers.map((clubMember) => (
        <Avatar key={clubMember.id} avatarSize="normal" profileImageSrc={clubMember.image} />
      ))}
      {clubMembers.map((clubMember) => (
        <Avatar key={clubMember.id} avatarSize="normal" profileImageSrc={clubMember.image} />
      ))}
      {clubMembers.map((clubMember) => (
        <Avatar key={clubMember.id} avatarSize="normal" profileImageSrc={clubMember.image} />
      ))}
      {clubMembers.map((clubMember) => (
        <Avatar key={clubMember.id} avatarSize="normal" profileImageSrc={clubMember.image} />
      ))}
      {clubMembers.map((clubMember) => (
        <Avatar key={clubMember.id} avatarSize="normal" profileImageSrc={clubMember.image} />
      ))}
    </ClubMemberContainer>
  );
};

export default ClubMember;

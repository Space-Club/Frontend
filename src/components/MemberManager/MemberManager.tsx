import useClubMembersQuery from '@/hooks/query/club/useClubMembersQuery';
import useClubId from '@/hooks/useClubId';

import MemberManageItem from '../MemberManageItem/MemberManageItem';
import { MemberManagerContainer } from './MemberManager.style';

const MemberManager = () => {
  const { clubId } = useClubId();

  const { clubMembers } = useClubMembersQuery({ clubId });

  return (
    <MemberManagerContainer>
      {clubMembers.map((clubMember) => {
        return (
          <MemberManageItem
            key={clubMember.id}
            clubId={clubId}
            memberId={clubMember.id}
            name={clubMember.name}
            profileImageSrc={clubMember.image}
          />
        );
      })}
      {clubMembers.map((clubMember) => {
        return (
          <MemberManageItem
            key={clubMember.id}
            clubId={clubId}
            memberId={clubMember.id}
            name={clubMember.name}
            profileImageSrc={'https://avatars.githubusercontent.com/u/48426991?v=4'}
          />
        );
      })}
    </MemberManagerContainer>
  );
};

export default MemberManager;

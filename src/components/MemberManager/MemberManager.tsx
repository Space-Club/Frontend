import useClubMembersQuery from '@/hooks/query/club/useClubMembersQuery';

import { useLocation } from 'react-router-dom';

import MemberManageItem from '../MemberManageItem/MemberManageItem';
import { MemberManagerContainer } from './MemberManager.style';

const MemberManager = () => {
  const { pathname } = useLocation();
  const clubId = pathname.split('/').pop();

  if (!clubId) {
    throw new Error('pathname을 가져오는 도중 에러가 발생했습니다.');
  }

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

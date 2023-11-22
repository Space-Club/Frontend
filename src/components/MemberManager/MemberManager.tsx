import useClubMembersQuery from '@/hooks/query/club/useClubMembersQuery';
import useClubId from '@/hooks/useClubId';
import { MediumTitleStyled } from '@/styles/common';

import MemberManageItem from '../MemberManageItem/MemberManageItem';
import { MemberManagerContainer } from './MemberManager.style';

const MemberManager = () => {
  const { clubId } = useClubId();
  const { clubMembers } = useClubMembersQuery({ clubId });

  if (!clubMembers) return null;

  return (
    <>
      <MediumTitleStyled>멤버설정</MediumTitleStyled>
      <MemberManagerContainer>
        {clubMembers.map((clubMember) => {
          return (
            <MemberManageItem
              key={clubMember.id}
              clubId={clubId}
              memberId={clubMember.id}
              role={clubMember.role}
              name={clubMember.name}
              profileImageSrc={clubMember.profileImageUrl}
            />
          );
        })}
      </MemberManagerContainer>
    </>
  );
};

export default MemberManager;

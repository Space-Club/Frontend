import useGetInviteClubInfoQuery from '@/hooks/query/club/useGetInviteClubInfoQuery';
import { ClubInfoWrapper, MessageStyled } from '@/pages/club/InvitePage/InvitePage.style';

import Avatar from '../common/Avatar/Avatar';
import ClubInfo from '../common/ClubInfo/ClubInfo';

const InviteClubInfo = ({ inviteCode }: { inviteCode: string }) => {
  const { inviteClubInfo, isLoading } = useGetInviteClubInfoQuery({ inviteCode });

  if (isLoading) {
    return <div>클럽 info 로딩 중</div>;
  }

  const { logoImageUrl, name, info, memberCount } = inviteClubInfo!;

  return (
    <>
      <ClubInfoWrapper>
        <Avatar avatarSize="medium" profileImageSrc={logoImageUrl} isClub />
        <ClubInfo reverse name={name} info={info} memberCount={memberCount} />
      </ClubInfoWrapper>
      <MessageStyled>{name} 클럽에 가입하시겠습니까?</MessageStyled>
    </>
  );
};

export default InviteClubInfo;

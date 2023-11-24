import useGetInviteClubInfoQuery from '@/hooks/query/club/useGetInviteClubInfoQuery';

import ActiveButton from '../ActiveButton/ActiveButton';
import Avatar from '../common/Avatar/Avatar';
import ClubInfo from '../common/ClubInfo/ClubInfo';
import { ClubInfoWrapper, MessageStyled } from './InviteClubInfo.style';

const InviteClubInfo = ({ inviteCode }: { inviteCode: string }) => {
  const { inviteClubInfo } = useGetInviteClubInfoQuery({ inviteCode });
  if (!inviteClubInfo) {
    return (
      <div>
        유효하지 않은 클럽입니다.
        <ActiveButton buttonText="홈으로 가기" fontSize="smallTitle" />
      </div>
    );
  }

  const { logoImageUrl, name, info, memberCount } = inviteClubInfo;

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

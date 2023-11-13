import ActiveButton from '@/components/ActiveButton/ActiveButton';
import Avatar from '@/components/common/Avatar/Avatar';
import BigLogo from '@/components/common/BigLogo/BigLogo';
import ClubInfo from '@/components/common/ClubInfo/ClubInfo';
import { LOGO_TEXT } from '@/constants/logo';
import { PATH } from '@/constants/path';
import useGetInviteClubInfoQuery from '@/hooks/query/club/useGetInviteClubInfoQuery';
import useJoinClub from '@/hooks/query/club/useJoinClub';
import { getStorage } from '@/utils/localStorage';

import { useLocation, useNavigate, useParams } from 'react-router-dom';

import {
  ClubInfoWrapper,
  InviteInfoWrapper,
  LogoNInfoWrapper,
  MessageStyled,
  PageContainer,
} from './InvitePage.style';

const InvitePage = () => {
  const { inviteCode } = useParams() as { inviteCode: string };
  const { pathname } = useLocation();
  const { inviteClubInfo } = useGetInviteClubInfoQuery({ inviteCode });
  const { joinClub, isLoading } = useJoinClub();
  const navigate = useNavigate();
  const isLogin = Boolean(getStorage('token'));

  if (!inviteClubInfo) {
    throw new Error('eventId is null');
  }

  const { name, info, logoImageUrl, memberCount } = inviteClubInfo;

  const handleClickJoinButton = () => {
    if (isLogin) {
      joinClub({ inviteCode });
    } else {
      sessionStorage.setItem('returnpage', pathname);
      navigate(PATH.LOGIN);
    }
  };

  return (
    <PageContainer>
      <LogoNInfoWrapper>
        <BigLogo logoText={LOGO_TEXT.SPACE_CLUB} />
        <InviteInfoWrapper>
          <ClubInfoWrapper>
            <Avatar avatarSize="medium" profileImageSrc={logoImageUrl} isClub />
            <ClubInfo reverse name={name} info={info} memberCount={memberCount} />
          </ClubInfoWrapper>
          <MessageStyled>{name} 클럽에 가입하시겠습니까?</MessageStyled>
          <ActiveButton
            buttonText="가입하기"
            fontSize="smallTitle"
            isLoading={isLoading}
            onClick={handleClickJoinButton}
          />
        </InviteInfoWrapper>
      </LogoNInfoWrapper>
    </PageContainer>
  );
};

export default InvitePage;

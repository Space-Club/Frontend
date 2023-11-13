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
  const { invitecode } = useParams();
  const { pathname } = useLocation();
  const { inviteClubInfo } = useGetInviteClubInfoQuery(invitecode ?? '');
  const { joinClub, isLoading } = useJoinClub();
  const navigate = useNavigate();
  const isLogin = Boolean(getStorage('token'));

  if (!inviteClubInfo) {
    return <div>가입할 클럽 정보를 불러오지 못했습니다. </div>;
  }

  const { name, info, logoImageUrl, memberCount } = inviteClubInfo;

  const handleClickJoinButton = () => {
    sessionStorage.setItem('return page', pathname);
    navigate(PATH.LOGIN);
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
          <MessageStyled>`${name}에 가입하시겠습니까?`</MessageStyled>
          <ActiveButton
            buttonText="가입하기"
            fontSize="smallTitle"
            isLoading={isLoading}
            onClick={() => {
              isLogin ? joinClub(invitecode ?? '') : handleClickJoinButton();
            }}
          />
        </InviteInfoWrapper>
      </LogoNInfoWrapper>
    </PageContainer>
  );
};

export default InvitePage;

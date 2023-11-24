import ActiveButton from '@/components/ActiveButton/ActiveButton';
import InviteClubInfo from '@/components/InviteClubInfo/InviteClubInfo';
import BigLogo from '@/components/common/BigLogo/BigLogo';
import Spinner from '@/components/common/Spinner/Spinner';
import { LOGO_TEXT } from '@/constants/logo';
import { PATH } from '@/constants/path';
import useJoinClub from '@/hooks/query/club/useJoinClub';
import { getStorage } from '@/utils/localStorage';

import { Suspense } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

import { InviteInfoWrapper, LogoNInfoWrapper, PageContainer } from './InvitePage.style';

const InvitePage = () => {
  const navigate = useNavigate();
  const isLogin = Boolean(getStorage('token'));

  const { inviteCode } = useParams() as { inviteCode: string };
  const { pathname } = useLocation();

  const { joinClub, isLoading } = useJoinClub();

  const handleClickJoinButton = () => {
    if (isLogin) {
      joinClub({ inviteCode });
    } else {
      localStorage.setItem('returnpage', pathname);
      navigate(PATH.LOGIN);
    }
  };

  return (
    <PageContainer>
      <LogoNInfoWrapper>
        <BigLogo logoText={LOGO_TEXT.SPACE_CLUB} />
        <Suspense fallback={<Spinner />}>
          <InviteInfoWrapper>
            <InviteClubInfo inviteCode={inviteCode} />
            <ActiveButton
              buttonText="가입하기"
              fontSize="smallTitle"
              isLoading={isLoading}
              onClick={handleClickJoinButton}
            />
          </InviteInfoWrapper>
        </Suspense>
      </LogoNInfoWrapper>
    </PageContainer>
  );
};

export default InvitePage;

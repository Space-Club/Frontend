import ClubBoard from '@/components/ClubPost/ClubPost';
import BigLogo from '@/components/common/BigLogo/BigLogo';
import { LOGO_TEXT, MESSAGE } from '@/constants/logo';

import KakaoAuthButton from '../../components/KakaoAuthButton/KakaoAuthButton';
import { LoginAreaStyled, PageContainerStyled, TitleStyled } from './LoginPage.style';

const LoginPage = () => {
  return (
    <PageContainerStyled>
      <BigLogo logoText={LOGO_TEXT.SPACE_CLUB} />
      <ClubBoard />
      <LoginAreaStyled>
        <TitleStyled>{MESSAGE.WELCOME}</TitleStyled>
        <KakaoAuthButton />
      </LoginAreaStyled>
    </PageContainerStyled>
  );
};

export default LoginPage;

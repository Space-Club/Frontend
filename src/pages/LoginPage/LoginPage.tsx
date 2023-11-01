import { LogoText, Message } from '@/constants/LoginPage';

import KakaoAuthButton from '../../components/KakaoAuthButton/KakaoAuthButton';
import {
  LoginAreaStyled,
  LogoAreaStyled,
  LogoCircleStyled,
  LogoTextStyled,
  PageContainerStyled,
  TitleStyled,
} from './LoginPage.style';

const LoginPage = () => {
  return (
    <PageContainerStyled>
      <LogoAreaStyled>
        <LogoCircleStyled>
          <LogoTextStyled>{LogoText.SPACE_CLUB}</LogoTextStyled>
        </LogoCircleStyled>
      </LogoAreaStyled>
      <LoginAreaStyled>
        <TitleStyled>{Message.WELCOME}</TitleStyled>
        <KakaoAuthButton />
      </LoginAreaStyled>
    </PageContainerStyled>
  );
};

export default LoginPage;

import { LogoText, Message } from '@/constants/LoginPage';

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
        <button>Login with Kakao</button>
      </LoginAreaStyled>
    </PageContainerStyled>
  );
};

export default LoginPage;

import { LogoText, Message } from '@/constants/LoginPage';

import {
  ContainerStyled,
  LoginAreaStyled,
  LogoAreaStyled,
  LogoCircleStyled,
  LogoTextStyled,
  TitleStyled,
} from './LoginPage.style';

const LoginPage = () => {
  return (
    <ContainerStyled>
      <LogoAreaStyled>
        <LogoCircleStyled>
          <LogoTextStyled>{LogoText.SPACE_CLUB}</LogoTextStyled>
        </LogoCircleStyled>
      </LogoAreaStyled>
      <LoginAreaStyled>
        <TitleStyled>{Message.WELCOME}</TitleStyled>
        <button>Login with Kakao</button>
      </LoginAreaStyled>
    </ContainerStyled>
  );
};

export default LoginPage;

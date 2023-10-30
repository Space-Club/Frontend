import { LogoText, Message } from '@/constants/LoginPage';

// import KakaoLoginButton from '../../components/KakaoLoginButton/KakaoLoginButton';
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
        {/* <KakaoLoginButton /> */}
      </LoginAreaStyled>
    </PageContainerStyled>
  );
};

export default LoginPage;

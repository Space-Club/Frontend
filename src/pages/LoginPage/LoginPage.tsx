import {
  ContainerStyled,
  ItemLoginStyled,
  ItemLogoAreaStyled,
  LogoCircleStyled,
  LogoTextStyled,
  TitleStyled,
} from './LoginPage.style';

const LoginPage = () => {
  return (
    <ContainerStyled>
      <ItemLogoAreaStyled>
        <LogoCircleStyled>
          <LogoTextStyled>
            <span>Space</span>
            <span>Club</span>
          </LogoTextStyled>
        </LogoCircleStyled>
      </ItemLogoAreaStyled>
      <ItemLoginStyled>
        <TitleStyled>스페이스 클럽에 오신 걸 환영합니다!</TitleStyled>
        <button>Login with Kakao</button>
      </ItemLoginStyled>
    </ContainerStyled>
  );
};

export default LoginPage;

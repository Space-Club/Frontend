import styled from '@emotion/styled';

import Theme from '@styles/Theme';

const PageContainerStyled = styled.div`
  display: flex;
  height: 100vh;
`;

const LogoAreaStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 30rem;
  height: 100vh;
  min-height: 30rem;
`;

const LogoCircleStyled = styled.div`
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  background: linear-gradient(
    139deg,
    #012a36 10.1%,
    rgba(50, 51, 96, 0.78) 46.84%,
    rgba(113, 42, 124, 0.51) 69.53%,
    rgba(0, 221, 49, 0.15) 88.79%
  );
  overflow: hidden;
`;

const LogoTextStyled = styled.h1`
  display: flex;
  flex-direction: column;
  position: relative;
  top: 1rem;
  right: 3rem;
  color: ${Theme.color.logoTextColor};
  text-align: end;
  font-size: 6.25rem;
  font-family: 'LogoFont';
`;

const LoginAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 50%;
  min-width: 30rem;
  height: 100vh;
  min-height: 30rem;
  font-family: 'MainBold';
`;

const TitleStyled = styled.h1`
  padding: 0 10% 3rem 10%;
  font-weight: bold;
  font-size: large;
`;

export {
  PageContainerStyled as ContainerStyled,
  LogoAreaStyled,
  LogoCircleStyled,
  LogoTextStyled,
  LoginAreaStyled,
  TitleStyled,
};

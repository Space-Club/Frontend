import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const ContainerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 10rem;
  height: 4rem;
  user-select: none;
`;

const LogoCircleStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background: linear-gradient(
    139deg,
    #012a36 10.1%,
    rgba(50, 51, 96, 0.78) 46.84%,
    rgba(113, 42, 124, 0.51) 69.53%,
    rgba(0, 221, 49, 0.15) 88.79%
  );
  overflow: visible;
  cursor: pointer;
`;

const LogoTextStyled = styled.div`
  color: ${Theme.color.logoTextColor};
  font-family: 'LogoFont';
  font-size: x-large;
  text-shadow: 0.2rem 0.2rem 0.2rem rgba(50, 51, 96, 0.78);
`;

export { ContainerStyled, LogoCircleStyled, LogoTextStyled };

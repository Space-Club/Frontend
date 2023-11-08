import styled from '@emotion/styled';

import Theme from '@styles/Theme';

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

export { LogoCircleStyled, LogoTextStyled };

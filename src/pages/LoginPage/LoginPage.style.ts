import styled from '@emotion/styled';

import Theme from '@styles/Theme';

const PageContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
`;

const LoginAreaStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 30rem;
  font-family: 'MainBold';
`;

const TitleStyled = styled.h1`
  padding-bottom: 2rem;
  font-weight: bold;
  font-size: ${Theme.fontSize.mediumTitle};
`;

export { PageContainerStyled, LoginAreaStyled, TitleStyled };

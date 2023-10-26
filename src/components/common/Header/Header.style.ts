import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

const HeaderLayoutStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  height: 15vh;
  min-height: 4rem;
`;

const HeaderContainerStyled = styled.div`
  display: flex;
  width: 80%;
  min-width: 60rem;
  border-bottom: 0.07rem solid ${Theme.color.lineColor};
`;

const LogoWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ChildrenContainerStyled = styled.div`
  display: flex;
  flex-grow: 1;
  align-items: center;
`;

export { HeaderLayoutStyled, HeaderContainerStyled, LogoWrapperStyled, ChildrenContainerStyled };

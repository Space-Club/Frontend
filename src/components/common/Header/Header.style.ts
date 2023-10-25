import Theme from '@/styles/Theme';
import styled from '@emotion/styled';

interface HeaderProps {
  page: 'main' | 'club';
}

const HeaderContainerStyled = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  min-width: 60rem;
  border-bottom: 0.07rem solid ${Theme.color.lineColor};
`;

const LogoWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const OptionWrapperStyled = styled.div<HeaderProps>`
  display: flex;
  width: 75%;
  justify-content: ${({ page }) => (page === 'main' ? 'space-between' : 'flex-end')};
  align-items: center;
`;

const ChildrenStyled = styled.div<HeaderProps>`
  display: flex;
  justify-content: space-between;
  width: ${({ page }) => (page === 'main' ? '100%' : '40%')};
`;

export { HeaderContainerStyled, LogoWrapperStyled, OptionWrapperStyled, ChildrenStyled };

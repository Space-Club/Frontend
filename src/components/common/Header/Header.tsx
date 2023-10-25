import { ReactNode } from 'react';

import SpaceClubHomeLogo from '../SpaceClubHomeLogo/SpaceClubHomeLogo';
import {
  ChildrenStyled,
  HeaderContainerStyled,
  LogoWrapperStyled,
  OptionWrapperStyled,
} from './Header.style';

interface HeaderProps {
  page: 'main' | 'club';
  children?: ReactNode;
}

const Header = ({ page, children }: HeaderProps) => {
  return (
    <HeaderContainerStyled>
      <LogoWrapperStyled>
        <SpaceClubHomeLogo />
      </LogoWrapperStyled>
      <OptionWrapperStyled page={page}>
        <ChildrenStyled page={page}>{children}</ChildrenStyled>
      </OptionWrapperStyled>
    </HeaderContainerStyled>
  );
};

export default Header;

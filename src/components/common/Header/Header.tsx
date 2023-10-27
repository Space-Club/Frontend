import { ReactNode } from 'react';

import SpaceClubHomeLogo from '../SpaceClubHomeLogo/SpaceClubHomeLogo';
import {
  ChildrenContainerStyled,
  HeaderContainerStyled,
  HeaderLayoutStyled,
  LogoWrapperStyled,
} from './Header.style';

interface HeaderProps {
  children?: ReactNode;
}

const Header = ({ children }: HeaderProps) => {
  return (
    <HeaderLayoutStyled>
      <HeaderContainerStyled>
        <LogoWrapperStyled>
          <SpaceClubHomeLogo />
        </LogoWrapperStyled>
        <ChildrenContainerStyled>{children}</ChildrenContainerStyled>
      </HeaderContainerStyled>
    </HeaderLayoutStyled>
  );
};

export default Header;

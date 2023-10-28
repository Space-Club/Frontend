import { CSSProperties, ReactNode } from 'react';

import SpaceClubHomeLogo from '../SpaceClubHomeLogo/SpaceClubHomeLogo';
import {
  ChildrenContainerStyled,
  HeaderContainerStyled,
  HeaderLayoutStyled,
  LogoWrapperStyled,
} from './Header.style';

interface HeaderProps {
  children?: ReactNode;
  style?: CSSProperties;
}

const Header = ({ children, style }: HeaderProps) => {
  return (
    <HeaderLayoutStyled>
      <HeaderContainerStyled>
        <LogoWrapperStyled>
          <SpaceClubHomeLogo />
        </LogoWrapperStyled>
        <ChildrenContainerStyled style={style}>{children}</ChildrenContainerStyled>
      </HeaderContainerStyled>
    </HeaderLayoutStyled>
  );
};

export default Header;

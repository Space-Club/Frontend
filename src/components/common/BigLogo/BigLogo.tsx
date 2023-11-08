import { LogoCircleStyled, LogoTextStyled } from './BigLogo.style';

interface BigLogoProps {
  logoText: string;
}

const BigLogo = ({ logoText }: BigLogoProps) => {
  return (
    <LogoCircleStyled>
      <LogoTextStyled>{logoText}</LogoTextStyled>
    </LogoCircleStyled>
  );
};

export default BigLogo;

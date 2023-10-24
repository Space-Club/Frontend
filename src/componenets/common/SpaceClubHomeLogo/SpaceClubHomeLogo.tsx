import { useNavigate } from 'react-router-dom';

import { ContainerStyled, LogoCircleStyled, LogoTextStyled } from './SpaceClubHomeLogo.style';

const SpaceClubHomeLogo = () => {
  const navigate = useNavigate();

  return (
    <ContainerStyled onClick={() => navigate('/')}>
      <LogoCircleStyled>
        <LogoTextStyled>Space_Club</LogoTextStyled>
      </LogoCircleStyled>
    </ContainerStyled>
  );
};

export default SpaceClubHomeLogo;

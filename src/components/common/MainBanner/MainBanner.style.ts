import Theme from '@/styles/Theme';
import { twoLineTitle } from '@/styles/common';
import styled from '@emotion/styled';

const BannerContainerStyled = styled.div`
  width: 100%;
  max-width: 60rem;
  height: 19rem;
  border-radius: 2.3125rem;
  margin: 4rem 0;
  overflow: hidden;
`;

const BannerWrapperStyled = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`;

const BannerImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const BannerTopTitleStyled = styled(twoLineTitle)`
  position: absolute;
  top: 1.56rem;
  left: 2.65rem;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  color: ${Theme.color.white};
`;

const BannerBottomTitleStyled = styled.h1`
  position: absolute;
  bottom: 0.4rem;
  right: 4rem;
  font-size: 2.5rem;
  font-style: normal;
  font-weight: 700;
  color: ${Theme.color.white};
`;

export {
  BannerContainerStyled,
  BannerImageStyled,
  BannerWrapperStyled,
  BannerTopTitleStyled,
  BannerBottomTitleStyled,
};

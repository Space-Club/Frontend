import styled from '@emotion/styled';

interface BannerProps {
  bannerImageSrc?: string;
  width: number;
  height: number;
}

const BannerContainerStyled = styled.div<BannerProps>`
  width: ${({ width }) => `${width}rem`};
  height: ${({ height }) => `${height}rem`};
  border-radius: 10px;
  overflow: hidden;
`;

const BannerImageStyled = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

export { BannerContainerStyled, BannerImageStyled };

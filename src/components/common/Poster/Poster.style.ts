import styled from '@emotion/styled';

const PosterAreaStyled = styled.div<{ width: number }>`
  width: ${({ width }) => width + 'rem'};
  min-width: ${({ width }) => width + 'rem'};
  height: ${({ width }) => width * 1.4 + 'rem'};
  display: flex;
  overflow: hidden;
`;

const PosterStyled = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.1s ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`;

export { PosterAreaStyled, PosterStyled };

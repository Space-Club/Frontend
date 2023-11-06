import styled from '@emotion/styled';

const PosterAreaStyled = styled.div<{ width: number }>`
  position: relative;
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

const TagStyled = styled.div`
  position: absolute;
  top: 0.5rem;
  left: 0.5rem;
`;

export { PosterAreaStyled, PosterStyled, TagStyled };

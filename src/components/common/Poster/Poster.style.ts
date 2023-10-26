import styled from '@emotion/styled';

const PosterAreaStyled = styled.div`
  min-width: 12rem;
  height: 17rem;
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

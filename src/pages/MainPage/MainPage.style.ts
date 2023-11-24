import styled from '@emotion/styled';

const ContentContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const BannerWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;
`;

const EventCardWrapperStyled = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 1rem;
  justify-items: center;
  align-items: center;
  max-width: 75rem;

  @media (max-width: 71rem) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 50rem) {
    grid-template-columns: 1fr;
  }
`;

const PaginationWrapper = styled.div`
  padding: 2rem 0 5rem 0;
`;

export { ContentContainerStyled, BannerWrapperStyled, EventCardWrapperStyled, PaginationWrapper };

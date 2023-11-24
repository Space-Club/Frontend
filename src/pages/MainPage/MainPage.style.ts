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
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 1rem;
  max-width: 70rem;
`;

const PaginationWrapper = styled.div`
  padding: 2rem 0 5rem 0;
`;

export { ContentContainerStyled, BannerWrapperStyled, EventCardWrapperStyled, PaginationWrapper };
